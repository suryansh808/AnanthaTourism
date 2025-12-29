import dotenv from "dotenv";
import Lead from "../models/Leads.js";
import { sendEmail } from "../config/mailer.js";

dotenv.config();

export const createLead = async (req, res) => {
  try {
    // 1️⃣ Persist Lead
    const lead = await Lead.create(req.body);

    // 2️⃣ Internal Notification
    await sendEmail({
      email: process.env.LEAD_NOTIFY_EMAIL,
      subject: "🚨 New Lead Captured  Anantha Tourism",
      message: `
        <div style="font-family: Arial; max-width: 600px; margin:auto; border:1px solid #ddd; border-radius:8px;">
          <div style="background:#3F2455; color:#fff; text-align:center; padding:20px;">
            <h2>New Lead Captured</h2>
          </div>

          <div style="padding: 20px;">
            <p><strong>Name:</strong> ${lead.name || "-"}</p>
            <p><strong>Email:</strong> ${lead.email || "-"}</p>
            <p><strong>Phone:</strong> ${lead.phone || "-"}</p>
            <p><strong>Interests:</strong> ${lead.interests || "-"}</p>

            <p style="margin-top:10px; color:#555;">
              Action: Please initiate structured follow-up & qualification.
            </p>
          </div>
        </div>
      `,
    });

    // 3️⃣ Customer Auto-Response — ONLY if email exists
    if (lead.email) {
      await sendEmail({
        email: lead.email,
        subject: "We’ve Received Your Request Anantha Tourism",
        message: `
          <div style="font-family: Arial; max-width: 600px; margin:auto; border:1px solid #ddd; border-radius:8px;">
            <div style="background:#3F2455; color:#fff; text-align:center; padding:20px;">
              <h2>Thank You For Connecting With Us 🙏</h2>
            </div>

            <div style="padding: 20px;">
              <p>Dear ${lead.name || "Devotee"},</p>

              <p>
                We’ve successfully received your enquiry regarding:
                <strong>${lead.interests || "Spiritual Travel Assistance"}</strong>
              </p>

              <p>
                Our dedicated pilgrimage experience team will reach out shortly to
                assist you with personalised details.
              </p>

              <p style="margin-top: 10px;">
                <strong>Summary of your submission:</strong>
              </p>

              <ul>
                <li>Email: ${lead.email}</li>
                <li>Phone: ${lead.phone || "-"}</li>
              </ul>

              <p style="margin-top:15px;">
                With gratitude,<br/>
                <strong>Anantha Tourism</strong>
              </p>
            </div>
          </div>
        `,
      });
    }

    // 4️⃣ API Response
    res.status(201).json({
      success: true,
      message: "Lead captured & emails delivered",
      lead,
    });

  } catch (err) {
    console.error("Lead creation error:", err);

    res.status(500).json({
      success: false,
      message: "Lead creation failed",
      error: err.message,
    });
  }
};
