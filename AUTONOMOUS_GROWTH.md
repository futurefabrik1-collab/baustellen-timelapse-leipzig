# Autonomous Growth System

This repo now includes an automated weekly growth loop.

## What runs automatically

GitHub Action: `.github/workflows/autonomous-growth.yml`

- Runs every Monday (06:15 UTC)
- Scrapes your site + 3 competitor pages
- Produces `reports/market-intel-YYYY-MM-DD.md`
- Updates `reports/latest.md`
- Commits report back to `main`

## Manual run

```bash
npm run market:intel
```

or from GitHub Actions: **Run workflow**.

## Current competitors tracked

- https://www.netco.de/professionelle-timelapse-kameras-fuer-baustellen/
- https://baustellen-kamera.de/
- https://www.bau.camera/

## Next step (recommended)

To make this truly performance-driven (lead-gen focused), add these integrations:

1. Google Search Console query/page exports
2. Google Ads spend/conversion exports
3. GA4 conversion events (form_submit, call_click, whatsapp_click)
4. Auto-prioritization score (impact × confidence × effort)

Then the weekly report can recommend *specific* landing-page and ad-copy updates based on actual ROI, not only page scraping.
