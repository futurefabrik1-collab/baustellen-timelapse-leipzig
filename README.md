# Baustellen-Timelapse Leipzig Website

Professional construction timelapse documentation website for Leipzig and surrounding areas.

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your SMTP credentials (see configuration section below)

3. **Run local development server:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000

### Deployment to Vercel

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
   vercel --prod
   ```

## 📧 Email Configuration

The contact form sends emails to `kontakt@baustellen-timelapse-leipzig.de`. You need to configure SMTP settings in Vercel environment variables.

### Option 1: Gmail (Recommended for testing)

1. Enable 2-Factor Authentication in your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Add environment variables in Vercel:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

### Option 2: Custom Domain Email

If you have email hosting with your domain:
```
SMTP_HOST=mail.your-domain.com
SMTP_PORT=587
SMTP_USER=kontakt@baustellen-timelapse-leipzig.de
SMTP_PASS=your-email-password
```

### Option 3: SendGrid (Recommended for production)

1. Sign up at https://sendgrid.com (free tier: 100 emails/day)
2. Create an API key
3. Add environment variables:
   ```
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   ```

### Setting Environment Variables in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASS`
4. Redeploy the project

## 📁 Project Structure

```
baustellen-timelapse-site/
├── index.html              # Main website HTML
├── public/                 # Static assets
│   └── hero-construction.jpg
├── api/                    # Vercel serverless functions
│   └── contact.js         # Contact form API endpoint
├── package.json           # Dependencies
├── vercel.json            # Vercel configuration
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🔧 Features

- ✅ Fully responsive design
- ✅ Dark theme with amber accents
- ✅ Contact form with email notifications
- ✅ Auto-reply to customers
- ✅ GDPR compliant
- ✅ Optimized for Vercel deployment
- ✅ Serverless API functions

## 📝 Contact Form Features

When a visitor submits the contact form:

1. **Email to Business** (kontakt@baustellen-timelapse-leipzig.de):
   - Contains visitor's name, email, phone, and message
   - Formatted professionally
   - Reply-to set to visitor's email

2. **Auto-reply to Visitor**:
   - Thanks them for their inquiry
   - Confirms 24-hour response time
   - Includes their original message
   - Provides direct contact information

## 🔐 Security

- Environment variables stored securely in Vercel
- CORS headers configured
- Input validation on all form fields
- Email sanitization
- No sensitive data in repository

## 📦 Dependencies

- `nodemailer`: Email sending library

## 🌐 GitHub Setup

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Baustellen-Timelapse Leipzig website"

# Add GitHub remote (replace with your repository)
git remote add origin https://github.com/yourusername/baustellen-timelapse-leipzig.git

# Push to GitHub
git push -u origin main
```

## 📞 Support

For questions or issues, contact: kontakt@baustellen-timelapse-leipzig.de

---

**© 2026 Baustellen-Timelapse Leipzig**  
Ein Service der Future Fabrik GbR
# Test
