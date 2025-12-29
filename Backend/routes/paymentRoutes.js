
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import crypto from "crypto";
import { razorpay } from "../config/razorpay.js";
import Booking from "../models/Booking.js";
import { generateBookingId } from "../utils/generateBookingId.js";

const router = express.Router();

/**
 * CREATE ORDER
 */
router.post("/create-order", async (req, res) => {
  // console.log("Razorpay Key:", process.env.RAZORPAY_KEY_ID);

  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    });

    res.json(order);
  } catch (err) {
    console.error("Create order failed:", err);
    res.status(500).json({ message: "Order creation failed" });
  }
});

/**
 * VERIFY PAYMENT + SAVE BOOKING (SINGLE SOURCE)
 */
// router.post("/verify-and-book", async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_payment_id,
//       razorpay_signature,
//       bookingData,
//     } = req.body;

//     const body = razorpay_order_id + "|" + razorpay_payment_id;

//     const expectedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_SECRET)
//       .update(body)
//       .digest("hex");

//     if (expectedSignature !== razorpay_signature) {
//       return res.status(400).json({ success: false });
//     }

//     const booking = new Booking({
//       bookingId: generateBookingId(), // AT+DATE+RAND
//       ...bookingData,
//       payment: {
//         razorpayOrderId: razorpay_order_id,
//         razorpayPaymentId: razorpay_payment_id,
//         razorpaySignature: razorpay_signature,
//         status: "PAID",
//       },
//     });

//     await booking.save();

//     res.status(201).json({
//       success: true,
//       bookingId: booking.bookingId,
//     });
//   } catch (err) {
//     console.error("Verification failed:", err);
//     res.status(500).json({ success: false });
//   }
// });
router.post("/verify-and-book", async (req, res) => {
  try {
    // 👇 Your frontend sends THIS object
    const {
      packageDetails,
      customerDetails,
      pricing,
      payment
    } = req.body;

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    } = payment;

    // ---- VERIFY SIGNATURE ----
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message:"Invalid signature" });
    }

    // ---- SAVE BOOKING ----
    const booking = new Booking({
      bookingId: generateBookingId(),
      packageDetails,
      customerDetails,
      totalAmount: pricing.totalAmount,   // 👈 GST included final price
      payment: {
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: "PAID"
      }
    });

    await booking.save();

    res.status(201).json({
      success: true,
      bookingId: booking.bookingId
    });

  } catch (err) {
    console.error("Verification failed:", err);
    res.status(500).json({ success: false });
  }
});

export default router;
