import express from "express";
import axios from "axios";
import { PHONEPE, generateXVerify } from "../config/phonepe.js";

import Booking from "../models/Booking.js";
import { generateBookingId } from "../utils/generateBookingId.js";

const router = express.Router();

router.post("/create-order", async (req, res) => {
  try {
    const { amount, merchantTransactionId } = req.body;

    const payload = {
      merchantId: PHONEPE.merchantId,
      merchantTransactionId,
      amount: amount * 100, // in paise
      merchantUserId: "USER001",
      redirectUrl: process.env.PHONEPE_REDIRECT_URL,
      callbackUrl: process.env.PHONEPE_CALLBACK_URL,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };

    const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString("base64");

    const path = "/pg/v1/pay";
    const xVerify = generateXVerify(payloadBase64, path);

    const response = await axios.post(
      `${PHONEPE.baseUrl}${path}`,
      { request: payloadBase64 },
      {
        headers: {
          "Content-Type": "application/json",
          "X-VERIFY": xVerify,
          "X-MERCHANT-ID": PHONEPE.merchantId,
        },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error(err?.response?.data || err);
    res.status(500).json({ message: "PhonePe order creation failed" });
  }
});


router.post("/verify-and-book", async (req, res) => {
  try {
    const { merchantTransactionId, packageDetails, customerDetails, pricing } =
      req.body;

    // 🔐 STATUS CHECK
    const path = `/pg/v1/status/${PHONEPE.merchantId}/${merchantTransactionId}`;
    const xVerify = generateXVerify("", path);

    const response = await axios.get(`${PHONEPE.baseUrl}${path}`, {
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": xVerify,
        "X-MERCHANT-ID": PHONEPE.merchantId,
      },
    });

    const result = response.data;

    // 🧠 ENTERPRISE-GRADE SUCCESS CHECK
    if (!result.success || result.code !== "PAYMENT_SUCCESS") {
      return res
        .status(400)
        .json({ success: false, message: "Payment not successful" });
    }

    const providerReferenceId =
      result?.data?.providerReferenceId || null;

    // 🛡 IDEMPOTENCY — DO NOT CREATE DUPLICATE BOOKINGS
    const existing = await Booking.findOne({
      "payment.merchantTransactionId": merchantTransactionId,
    });

    if (existing) {
      return res.json({
        success: true,
        bookingId: existing.bookingId,
      });
    }

    // 📝 CREATE BOOKING
    const booking = new Booking({
      bookingId: generateBookingId(),
      packageDetails,
      customerDetails,
      totalAmount: pricing.totalAmount,

      payment: {
        gateway: "PHONEPE",
        merchantTransactionId,
        providerReferenceId,
        status: "SUCCESS",
        rawResponse: result,
      },
    });

    await booking.save();

    res.json({ success: true, bookingId: booking.bookingId });
  } catch (err) {
    console.error(err?.response?.data || err);
    res.status(500).json({ success: false });
  }
});

router.post("/phonepe-callback", async (req, res) => {
  try {
    console.log("PhonePe Callback:", req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Callback error:", err);
    res.status(500).end();
  }
});

export default router;
