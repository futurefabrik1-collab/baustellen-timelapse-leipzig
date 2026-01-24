# 🚀 Deployment Guide: Baustellen-Timelapse Leipzig

## Step-by-Step Deployment to Vercel

### 1️⃣ Create GitHub Repository

1. **Go to GitHub** and create a new repository:
   - Repository name: `baustellen-timelapse-leipzig`
   - Description: "Professional construction timelapse website"
   - Visibility: Private (recommended) or Public
   - **DO NOT** initialize with README, .gitignore, or license

2. **Push your local repository to GitHub:**
   ```bash
   cd baustellen-timelapse-site
   git add .
   git commit -m "Initial commit: Complete website with contact form"
   git remote add origin https://github.com/YOUR-USERNAME/baustellen-timelapse-leipzig.git
   git push -u origin main
   ```

### 2️⃣ Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign in (or create account)

2. **Import GitHub Repository:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your `baustellen-timelapse-leipzig` repository
   - Click "Import"

3. **Configure Project:**
   - Framework Preset: **Other** (it's a static site)
   - Root Directory: `./` (leave as default)
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: `npm install`

4. **Add Environment Variables:**
   Before clicking "Deploy", add these environment variables:
   
   | Name | Value |
   |------|-------|
   | `SMTP_HOST` | `smtp.gmail.com` (or your SMTP server) |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | Your email address |
   | `SMTP_PASS` | Your email password/app password |

5. **Click "Deploy"** 🎉

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd baustellen-timelapse-site
   vercel
   ```
   - Follow the prompts
   - Choose "Link to existing project" or create new
   - Select your GitHub account

4. **Add Environment Variables:**
   ```bash
   vercel env add SMTP_HOST
   vercel env add SMTP_PORT
   vercel env add SMTP_USER
   vercel env add SMTP_PASS
   ```
   Enter values when prompted

5. **Deploy to production:**
   ```bash
   vercel --prod
   ```

### 3️⃣ Configure Email Service

Choose one of these email providers:

#### Option A: Gmail (Easy Setup for Testing)

1. **Enable 2-Factor Authentication:**
   - Go to Google Account Settings
   - Security → 2-Step Verification → Turn On

2. **Generate App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Vercel Contact Form"
   - Copy the 16-character password

3. **Environment Variables:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx-xxxx-xxxx-xxxx (app password)
   ```

#### Option B: SendGrid (Recommended for Production)

1. **Sign up at [SendGrid](https://sendgrid.com)**
   - Free tier: 100 emails/day forever

2. **Create API Key:**
   - Settings → API Keys → Create API Key
   - Choose "Full Access"
   - Copy the API key (you'll only see it once!)

3. **Environment Variables:**
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=SG.your-api-key-here
   ```

#### Option C: Custom Domain Email

If you have `kontakt@baustellen-timelapse-leipzig.de` email hosting:

1. **Get SMTP credentials from your email provider**
   - Contact your hosting provider (e.g., Strato, 1&1, etc.)
   - Ask for SMTP settings

2. **Environment Variables:**
   ```
   SMTP_HOST=mail.your-hosting-provider.com
   SMTP_PORT=587
   SMTP_USER=kontakt@baustellen-timelapse-leipzig.de
   SMTP_PASS=your-email-password
   ```

### 4️⃣ Configure Custom Domain (Optional)

1. **In Vercel Dashboard:**
   - Go to your project
   - Settings → Domains
   - Add `baustellen-timelapse-leipzig.de`

2. **Update DNS Records** (at your domain registrar):
   ```
   Type: A
   Name: @
   Value: 76.76.19.19

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (up to 48 hours, usually minutes)

### 5️⃣ Test the Contact Form

1. **Visit your deployed site**

2. **Fill out the contact form:**
   - Enter your name
   - Enter your email
   - Add a test message
   - Click "Absenden"

3. **Check for:**
   - ✅ Success message appears
   - ✅ Email received at `kontakt@baustellen-timelapse-leipzig.de`
   - ✅ Auto-reply received at your email

### 6️⃣ Troubleshooting

#### Contact form not working?

1. **Check Vercel logs:**
   ```bash
   vercel logs
   ```

2. **Common issues:**
   - ❌ **"Authentication failed"**: Check SMTP credentials
   - ❌ **"Connection timeout"**: Check SMTP_HOST and SMTP_PORT
   - ❌ **"550 rejected"**: Gmail may need "Less secure app access" or App Password
   - ❌ **No emails received**: Check spam folder

3. **Test SMTP connection locally:**
   ```bash
   cd baustellen-timelapse-site
   npm run dev
   ```
   Then test the form at http://localhost:3000

#### Image not showing?

- Check that `public/hero-construction.jpg` exists
- Check browser console for 404 errors
- Verify file path is `/public/hero-construction.jpg` in HTML

### 7️⃣ Monitoring & Analytics

#### Add Analytics (Optional)

Add to `<head>` section of `index.html`:

**Vercel Analytics:**
```html
<script defer src="/_vercel/insights/script.js"></script>
```

**Google Analytics:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### 8️⃣ Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- ✅ Deploy every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Run builds and show status in GitHub

To update the site:
```bash
git add .
git commit -m "Update content"
git push
```

Vercel will automatically deploy! 🚀

---

## 📋 Quick Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel project created and deployed
- [ ] Environment variables added in Vercel
- [ ] Contact form tested and working
- [ ] Emails being received at kontakt@baustellen-timelapse-leipzig.de
- [ ] Auto-reply emails working
- [ ] Custom domain configured (optional)
- [ ] Analytics added (optional)

---

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Nodemailer Docs**: https://nodemailer.com
- **GitHub Docs**: https://docs.github.com

## 📧 Support

For deployment questions: support@vercel.com  
For website questions: kontakt@baustellen-timelapse-leipzig.de

---

**Last Updated**: January 24, 2026  
**Status**: ✅ Ready for deployment
