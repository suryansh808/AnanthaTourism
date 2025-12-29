import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
  pool: true,
});

export const sendEmail = async ({ email, subject, message }) => {
  return transporter.sendMail({
    from: `"Anantha Tourism" <${process.env.SMTP_MAIL}>`,
    to: email,
    subject,
    html: message,
    priority: "high",
  });
};
