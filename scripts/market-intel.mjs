import fs from 'node:fs/promises';

const SITE_URL = process.env.SITE_URL || 'https://baustellen-timelapse-leipzig.de';
const COMPETITOR_URLS = (process.env.COMPETITOR_URLS || 'https://www.netco.de/professionelle-timelapse-kameras-fuer-baustellen/,https://baustellen-kamera.de/,https://www.bau.camera/').split(',').map(s => s.trim()).filter(Boolean);
const today = new Date().toISOString().slice(0, 10);
const OUTPUT_PATH = process.env.OUTPUT_PATH || `reports/market-intel-${today}.md`;

function extract(html, url) {
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/\s+/g, ' ').trim();
  const desc = (html.match(/<meta[^>]+name=["']description["'][^>]*content=["']([\s\S]*?)["'][^>]*>/i)?.[1] || '').trim();
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  const text = html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const words = text ? text.split(' ').length : 0;
  const hasPhone = /\+?\d[\d\s\-()]{7,}/.test(text);
  const hasEmail = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(text);
  const ctaCount = (text.match(/angebot|anfrage|kontakt|demo|beratung|jetzt|kostenlos/gi) || []).length;

  return { url, title, desc, h1s, words, hasPhone, hasEmail, ctaCount };
}

async function fetchPage(url) {
  try {
    const res = await fetch(url, { redirect: 'follow' });
    const html = await res.text();
    return { ok: res.ok, status: res.status, data: extract(html, url) };
  } catch (e) {
    return { ok: false, status: 0, error: String(e) };
  }
}

async function psi(url) {
  try {
    const endpoint = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=PERFORMANCE&category=SEO`;
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error(`PSI ${res.status}`);
    const json = await res.json();
    const c = json?.lighthouseResult?.categories || {};
    return {
      performance: Math.round((c.performance?.score || 0) * 100),
      seo: Math.round((c.seo?.score || 0) * 100)
    };
  } catch {
    return null;
  }
}

function opportunities(me, comps) {
  const allWords = comps.map(c => c.words).filter(Boolean);
  const avgWords = allWords.length ? Math.round(allWords.reduce((a, b) => a + b, 0) / allWords.length) : 0;
  const avgCta = comps.length ? (comps.reduce((a, b) => a + b.ctaCount, 0) / comps.length) : 0;

  const out = [];
  if (me.words < avgWords) out.push(`Increase on-page helpful content depth (you: ${me.words} words, competitor avg: ${avgWords}).`);
  if (me.ctaCount < avgCta) out.push(`Stronger conversion language needed (you CTA terms: ${me.ctaCount}, competitor avg: ${avgCta.toFixed(1)}).`);
  if (!me.hasPhone) out.push('Show phone number in hero/header for higher call conversion intent.');
  if (!me.hasEmail) out.push('Expose direct business email on key landing pages for trust.');
  if (!me.desc) out.push('Add/optimize meta description for CTR.');
  if (!me.h1s.length) out.push('Ensure exactly one clear H1 on each major page.');
  return out;
}

function render({ me, comps, psiScores, opps }) {
  const lines = [];
  lines.push(`# Weekly Market Intel — ${today}`);
  lines.push('');
  lines.push(`Target site: ${SITE_URL}`);
  lines.push('');
  lines.push('## Snapshot');
  lines.push('');
  lines.push(`- Title length: ${me.title.length}`);
  lines.push(`- Meta description length: ${me.desc.length}`);
  lines.push(`- H1 count: ${me.h1s.length}`);
  lines.push(`- Approx words: ${me.words}`);
  lines.push(`- CTA keyword count: ${me.ctaCount}`);
  if (psiScores) lines.push(`- PSI (mobile): Performance ${psiScores.performance}, SEO ${psiScores.seo}`);
  lines.push('');

  lines.push('## Competitor Signals');
  lines.push('');
  for (const c of comps) {
    lines.push(`### ${c.url}`);
    lines.push(`- Title (${c.title.length}): ${c.title || '(none)'}`);
    lines.push(`- Description length: ${c.desc.length}`);
    lines.push(`- H1 count: ${c.h1s.length}`);
    lines.push(`- Approx words: ${c.words}`);
    lines.push(`- CTA keyword count: ${c.ctaCount}`);
    lines.push('');
  }

  lines.push('## Prioritized Actions (next 7 days)');
  lines.push('');
  const top = opps.slice(0, 5);
  if (!top.length) {
    lines.push('- No obvious structural gaps found from HTML-level scrape. Focus on ads funnel + conversion tracking quality.');
  } else {
    top.forEach((o, i) => lines.push(`${i + 1}. ${o}`));
  }
  lines.push('');
  lines.push('## Notes');
  lines.push('- This is an automated surface-level scrape; pair it with Search Console + Ads data for decisions.');
  lines.push('- Keep an experiment log: change, date, expected impact, actual impact.');
  lines.push('');

  return lines.join('\n');
}

async function main() {
  if (!COMPETITOR_URLS.length) {
    console.error('COMPETITOR_URLS missing');
    process.exit(1);
  }

  const meRes = await fetchPage(SITE_URL);
  if (!meRes.ok) {
    console.error(`Failed to fetch site: ${SITE_URL}`);
    process.exit(1);
  }

  const compRes = await Promise.all(COMPETITOR_URLS.map(fetchPage));
  const comps = compRes.filter(r => r.ok).map(r => r.data);
  const me = meRes.data;
  const psiScores = await psi(SITE_URL);
  const opps = opportunities(me, comps);
  const report = render({ me, comps, psiScores, opps });

  await fs.mkdir('reports', { recursive: true });
  await fs.writeFile(OUTPUT_PATH, report, 'utf8');
  await fs.writeFile('reports/latest.md', report, 'utf8');

  console.log(`Wrote ${OUTPUT_PATH}`);
}

main();
