# ✅ Deployment Checklist

Copy this checklist and check off items as you complete them.

## 📝 Pre-Deployment

- [ ] Review the website at `index.html` (open in browser)
- [ ] Verify hero image displays correctly
- [ ] Test all navigation links
- [ ] Read through all content for accuracy
- [ ] Check mobile responsiveness

## 🐙 GitHub Setup

- [ ] Create new GitHub repository: `baustellen-timelapse-leipzig`
- [ ] Copy repository URL from GitHub
- [ ] Run: `git remote add origin YOUR-GITHUB-URL`
- [ ] Run: `git push -u origin main`
- [ ] Verify files appear on GitHub

## 🚀 Vercel Deployment

- [ ] Sign in to https://vercel.com (use GitHub account)
- [ ] Click "Add New..." → "Project"
- [ ] Import `baustellen-timelapse-leipzig` repository
- [ ] Leave all build settings as default
- [ ] Click "Deploy"
- [ ] Wait for initial deployment to complete

## 📧 Email Configuration

Choose ONE option and complete it:

### Option A: Gmail (Easiest for Testing)
- [ ] Enable 2-Factor Authentication on Google account
- [ ] Generate App Password at https://myaccount.google.com/apppasswords
- [ ] Copy the 16-character app password
- [ ] Add to Vercel environment variables:
  - [ ] `SMTP_HOST` = `smtp.gmail.com`
  - [ ] `SMTP_PORT` = `587`
  - [ ] `SMTP_USER` = `your-email@gmail.com`
  - [ ] `SMTP_PASS` = `your-app-password`
- [ ] Click "Redeploy" in Vercel

### Option B: SendGrid (Best for Production)
- [ ] Sign up at https://sendgrid.com (free tier)
- [ ] Create API Key (Full Access)
- [ ] Copy the API key
- [ ] Add to Vercel environment variables:
  - [ ] `SMTP_HOST` = `smtp.sendgrid.net`
  - [ ] `SMTP_PORT` = `587`
  - [ ] `SMTP_USER` = `apikey`
  - [ ] `SMTP_PASS` = `your-sendgrid-api-key`
- [ ] Click "Redeploy" in Vercel

### Option C: Custom Domain Email
- [ ] Get SMTP settings from email provider
- [ ] Add to Vercel environment variables:
  - [ ] `SMTP_HOST` = (from provider)
  - [ ] `SMTP_PORT` = (usually 587)
  - [ ] `SMTP_USER` = `kontakt@baustellen-timelapse-leipzig.de`
  - [ ] `SMTP_PASS` = (email password)
- [ ] Click "Redeploy" in Vercel

## 🧪 Testing

- [ ] Visit deployed site (Vercel will show URL)
- [ ] Test contact form with YOUR email
- [ ] Check email received at `kontakt@baustellen-timelapse-leipzig.de`
- [ ] Verify auto-reply received at your email
- [ ] Check spam folders if emails not received
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Verify all images load correctly
- [ ] Test all navigation links

## 🌐 Custom Domain (Optional)

- [ ] Go to Vercel → Settings → Domains
- [ ] Add `baustellen-timelapse-leipzig.de`
- [ ] Follow DNS instructions provided by Vercel
- [ ] Update DNS records at domain registrar:
  - [ ] A Record: `@` → `76.76.19.19`
  - [ ] CNAME Record: `www` → `cname.vercel-dns.com`
- [ ] Wait for DNS propagation (up to 48 hours)
- [ ] Verify domain works: https://baustellen-timelapse-leipzig.de
- [ ] Test www subdomain: https://www.baustellen-timelapse-leipzig.de

## 🔒 Security & Privacy

- [ ] Verify environment variables are NOT in GitHub
- [ ] Check `.gitignore` includes `.env`
- [ ] Ensure no sensitive data in public repository
- [ ] Test that SMTP credentials work
- [ ] Verify contact form has CSRF protection

## 📊 Analytics (Optional)

- [ ] Enable Vercel Analytics in project settings
- [ ] Add Google Analytics (if desired)
- [ ] Set up conversion tracking for contact form

## 📱 Social & SEO (Optional)

- [ ] Verify meta tags in `index.html`
- [ ] Test Open Graph preview: https://www.opengraph.xyz/
- [ ] Submit to Google Search Console
- [ ] Create Google My Business listing
- [ ] Add to local directories

## 📞 Business Setup

- [ ] Set up email forwarding from `kontakt@baustellen-timelapse-leipzig.de`
- [ ] Create email signature for responses
- [ ] Set up email filters/labels for contact form submissions
- [ ] Create response templates for common inquiries
- [ ] Set up auto-response for after-hours (optional)

## 📝 Documentation

- [ ] Save Vercel project URL
- [ ] Document SMTP provider used
- [ ] Save GitHub repository URL
- [ ] Create backup of environment variables (securely!)
- [ ] Document custom domain DNS settings

## 🎯 Post-Launch

- [ ] Announce launch on social media
- [ ] Send test inquiry to verify everything works
- [ ] Monitor Vercel logs for first 24 hours
- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Create backup/export of website

## 🔄 Maintenance

- [ ] Schedule monthly tests of contact form
- [ ] Monitor email delivery rates
- [ ] Check for Vercel system updates
- [ ] Review analytics monthly
- [ ] Update content as needed

---

## ✅ Deployment Complete!

Once all items are checked, your site is live and ready! 🎉

**Live URL**: ___________________________________

**GitHub**: ___________________________________

**Email**: kontakt@baustellen-timelapse-leipzig.de

**Last Updated**: _____/_____/_____

---

## 🆘 Issues?

If you encounter problems:

1. Check Vercel logs: Project → Deployments → View Logs
2. Test locally: `npm run dev`
3. Verify environment variables in Vercel
4. See DEPLOYMENT_GUIDE.md for troubleshooting
5. Check spam folder for test emails

**Support Resources**:
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- GitHub Docs: https://docs.github.com

---

**Created**: January 24, 2026  
**Status**: Ready for deployment
