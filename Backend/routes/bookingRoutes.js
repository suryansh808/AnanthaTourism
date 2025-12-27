import dotenv from "dotenv";
dotenv.config();
import express from "express";
import crypto from "crypto";
import Booking from "../models/Booking.js";
import { generateBookingId } from "../utils/generateBookingId.js";

const router = express.Router();

router.post("/verify-payment", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    bookingData,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ message: "Invalid payment signature" });
  }

  const booking = new Booking({
    bookingId: generateBookingId(),
    ...bookingData,
    payment: {
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
      status: "PAID",
    },
  });

  await booking.save();

  res.status(201).json({ message: "Booking confirmed", bookingId: booking.bookingId });
});

export default router;
