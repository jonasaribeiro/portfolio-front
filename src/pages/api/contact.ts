// src/pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    // Configure o transportador com suas variáveis de ambiente
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", // true para 465, false para outras portas
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Configuração do e-mail
    const mailOptions = {
      from: process.env.FROM_EMAIL, // seu e-mail de origem
      to: process.env.TO_EMAIL, // e-mail que receberá a mensagem
      subject: `Contato do site - ${name}`,
      text: `Você recebeu uma nova mensagem de ${name} (${email}):\n\n${message}`,
    };

    // Envio do e-mail
    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return res
      .status(500)
      .json({ error: "Erro ao enviar mensagem. Tente novamente mais tarde." });
  }
}
