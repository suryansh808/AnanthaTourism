import express from "express";
import SankalpaBooking from "../models/SankalpaBooking.js";
import { generateBookingId } from "../utils/generateBookingId.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const booking = new SankalpaBooking({
      bookingId: generateBookingId(),
      ...req.body,
    });

    await booking.save();

    res.status(201).json({
      success: true,
      bookingId: booking.bookingId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});

export default router;
