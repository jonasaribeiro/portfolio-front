import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ error: "Name, email, and message are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      // Esta linha agora usa a variável SMTP_SECURE diretamente
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailBodyText = `
      Você recebeu uma nova mensagem do seu portfólio:
      
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone || "Não informado"}
      
      Mensagem:
      ${message}
    `;

    const emailBodyHtml = `
      <div style="font-family: sans-serif; line-height: 1.6;">
        <h2>Nova Mensagem do Portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
        <hr>
        <h3>Mensagem:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `;

    const mailOptions = {
      from: `"${name}" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      subject: `Novo Contato do Portfólio de ${name}`,
      text: emailBodyText,
      html: emailBodyHtml,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res
      .status(500)
      .json({ error: "Error sending message. Please try again later." });
  }
}
