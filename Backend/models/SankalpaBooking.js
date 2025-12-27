import mongoose from "mongoose";

const SankalpaBookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, unique: true },

    packageType: { type: String, required: true },
    price: { type: Number, required: true },

    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    gotra: { type: String },
    guardianName: { type: String, required: true },
    purpose: { type: String, required: true },

    payment: {
      orderId: String,
      paymentId: String,
      signature: String,
      status: {
        type: String,
        enum: ["PAID", "FAILED", "PENDING"],
        default: "PENDING",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("SankalpaBooking", SankalpaBookingSchema);
