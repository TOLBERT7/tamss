import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('=== /api/send-email called ===');
  console.log('Method:', req.method);
  console.log('Headers:', req.headers);
  try {
    if (req.method !== 'POST') {
      console.log('⛔️ Method not allowed');
      res.setHeader('Content-Type', 'application/json');
      return res
        .status(405)
        .json({ success: false, error: 'Method Not Allowed' });
    }

    console.log('Body:', req.body);

    const { name, email, subject, message } = req.body;
    console.log({ name, email, subject, message });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('Transporter created, sending mail...');

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject,
      text: message,
    });
    console.log('✅ Mail sent');

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('🔥 Unexpected error in /api/send-email:', err);
    res.setHeader('Content-Type', 'application/json');
    return res
      .status(500)
      .json({ success: false, error: 'Internal Server Error' });
  }
}
