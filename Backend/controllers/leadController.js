import Lead from "../models/Leads.js";
import { sendLeadMail } from "../config/mailer.js";

export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    await sendLeadMail(lead);

    res.status(201).json({
      success: true,
      message: "Lead created successfully",
      lead
    });

  } catch (err) {
    console.error("Lead error:", err);
    res.status(500).json({
      success: false,
      message: "Lead creation failed"
    });
  }
};
