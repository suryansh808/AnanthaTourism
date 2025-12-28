
import Lead from "../models/Contact.js";
import { sendLeadMail } from "../config/mailer.js";

export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);

    await sendLeadMail(lead);

    return res.status(201).json({
      success: true,
      message: "Lead created and notification dispatched.",
      lead
    });

  } catch (err) {
    console.error("Lead Creation Error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error — please try again later."
    });
  }
};
