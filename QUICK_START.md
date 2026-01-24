# ⚡ Quick Start Guide

## 🎯 Deploy in 5 Minutes

### Step 1: Push to GitHub (2 minutes)

```bash
cd baustellen-timelapse-site

# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/baustellen-timelapse-leipzig.git
git push -u origin main
```

### Step 2: Deploy to Vercel (2 minutes)

1. Go to **https://vercel.com** (sign in with GitHub)
2. Click **"Add New..." → "Project"**
3. Import your `baustellen-timelapse-leipzig` repository
4. Click **"Deploy"** (yes, that's it!)

### Step 3: Configure Email (1 minute)

In Vercel Dashboard → Your Project → Settings → Environment Variables:

**For Gmail (quickest):**
```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_USER = your-email@gmail.com
SMTP_PASS = your-app-password
```

Get Gmail App Password: https://myaccount.google.com/apppasswords

**Then click "Redeploy" in Vercel**

---

## ✅ Done!

Your site is live at: `https://your-project.vercel.app`

Test the contact form - emails will be sent to:
- **Business:** kontakt@baustellen-timelapse-leipzig.de
- **Customer:** Auto-reply to their email

---

## 📚 Full Documentation

- See `DEPLOYMENT_GUIDE.md` for detailed instructions
- See `README.md` for project overview

## 🆘 Issues?

Common fixes:
- **Form not working?** Check environment variables in Vercel
- **No emails?** Check spam folder & SMTP credentials
- **Images broken?** Ensure `public/hero-construction.jpg` exists

---

**Need help?** Read `DEPLOYMENT_GUIDE.md` for troubleshooting
