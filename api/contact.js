// Vercel Serverless Function for Contact Form
const nodemailer = require('nodemailer');

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

module.exports = async (req, res) => {
  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Bitte füllen Sie alle Pflichtfelder aus.' 
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' 
      });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to business owner
    const ownerMailOptions = {
      from: `"Website Kontaktformular" <${process.env.SMTP_USER}>`,
      to: 'kontakt@baustellen-timelapse-leipzig.de',
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Nachricht:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Diese Nachricht wurde über das Kontaktformular auf baustellen-timelapse-leipzig.de gesendet.</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to customer
    const customerMailOptions = {
      from: `"Baustellen-Timelapse Leipzig" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Ihre Anfrage wurde empfangen',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f59e0b; padding: 20px; text-align: center;">
            <h1 style="color: #1a1a1a; margin: 0;">Baustellen-Timelapse Leipzig</h1>
          </div>
          
          <div style="padding: 30px; background-color: #fff;">
            <h2 style="color: #333;">Vielen Dank für Ihre Anfrage, ${name}!</h2>
            
            <p style="line-height: 1.6; color: #555;">
              Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Ihre Nachricht:</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <p style="line-height: 1.6; color: #555;">
              Bei dringenden Fragen können Sie uns auch direkt erreichen:
            </p>
            
            <div style="margin: 20px 0;">
              <p><strong>E-Mail:</strong> kontakt@baustellen-timelapse-leipzig.de</p>
              <p><strong>Website:</strong> <a href="https://baustellen-timelapse-leipzig.de">baustellen-timelapse-leipzig.de</a></p>
            </div>
          </div>
          
          <div style="background-color: #1a1a1a; padding: 20px; text-align: center; color: #999; font-size: 12px;">
            <p style="margin: 0;">© 2026 Baustellen-Timelapse Leipzig</p>
            <p style="margin: 5px 0 0 0;">Professionelle Baudokumentation für Leipzig und Umgebung</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(customerMailOptions);

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
    });

  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({
      error: 'Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};
