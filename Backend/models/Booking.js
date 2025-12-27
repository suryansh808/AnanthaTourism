import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true },

    packageDetails: {
      id: Number,
      title: String,
      destination: String,
      duration: String,
      price: String,
    },

    customerDetails: {
      fullName: String,
      email: String,
      phone: String,
      numberOfTravelers: Number,
    },

    totalAmount: { type: Number, required: true },

    payment: {
      razorpayOrderId: String,
      razorpayPaymentId: String,
      razorpaySignature: String,
      status: { type: String, enum: ["PAID"], default: "PAID" },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
