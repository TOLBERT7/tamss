import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('=== /api/send-email called ===');

  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Création du transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // 1️⃣ Vérification de la connexion/authentification SMTP
  try {
    await transporter.verify();
    console.log('✅ SMTP credentials are valid');
  } catch (err) {
    console.error('❌ SMTP credential verification failed:', err);
    res.setHeader('Content-Type', 'application/json');
    return res.status(500).json({
      success: false,
      error: 'SMTP authentication failed: ' + err.message
    });
  }

  // 2️⃣ Envoi du mail
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject,
      text: message,
    });
    console.log('✅ Mail sent successfully');

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('🔥 Error sending email:', err);
    res.setHeader('Content-Type', 'application/json');
    return res.status(500).json({
      success: false,
      error: 'Error sending email: ' + err.message
    });
  }
}
