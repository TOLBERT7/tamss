import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('=== /api/send-email called ===');

  if (req.method !== 'POST') {
    res.setHeader('Content-Type', 'application/json');
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Création du transporteur SMTP en mode STARTTLS (port 587)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,         // ex. "ssl0.ovh.net"
    port: Number(process.env.SMTP_PORT), // 587
    secure: false,                       // false pour STARTTLS
    requireTLS: true,                    // force le passage en TLS
    auth: {
      user: process.env.SMTP_USER,       // "admin@tamse.pro"
      pass: process.env.SMTP_PASS,       // mot de passe
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
      error: 'SMTP authentication failed: ' + err.message,
    });
  }

  // 2️⃣ Envoi du mail avec template HTML
  try {
    await transporter.sendMail({
      from: `"Site Tamse" <${process.env.SMTP_USER}>`,       // expéditeur obligatoirement admin@tamse.pro
      replyTo: `"${name}" <${email}>`,                       // réponse redirigée vers l’utilisateur
      to: process.env.SMTP_USER,                             // destination = admin@tamse.pro
      subject: `[Contact form] ${subject}`,                  // préfixe facultatif pour repérer le formulaire
      html: `
        <h2>Nouveau message de votre site</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email du visiteur :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      text: `
Nouveau message de votre site

Nom : ${name}
Email du visiteur : ${email}
Sujet : ${subject}

${message}
      `,
    });

    console.log('✅ Mail sent successfully');
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('🔥 Error sending email:', err);
    res.setHeader('Content-Type', 'application/json');
    return res.status(500).json({
      success: false,
      error: 'Error sending email: ' + err.message,
    });
  }
}
