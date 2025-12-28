
import dotenv from "dotenv";
dotenv.config();
import nodemailer from "nodemailer";
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const sendLeadMail = async (lead) => {
  return transporter.sendMail({
    from: `"Anantha Tourism" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject: "New Travel Enquiry — Kumbh Lead",
    html: `
      <h3>New Lead Captured</h3>
      <p><b>Name:</b> ${lead.name}</p>
      <p><b>Email:</b> ${lead.email}</p>
      <p><b>Phone:</b> ${lead.phone}</p>
      <p><b>Interests:</b> ${lead.interests}</p>
    `
  });
};
