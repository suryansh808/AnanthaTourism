import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";

import bookingRoutes from "../routes/bookingRoutes.js";
import paymentRoutes from "../routes/paymentRoutes.js";
import sankaplapaymentRoutes from "../routes/sankalpaPaymentRoutes.js";
import sankaplabookingRoutes from "../routes/sankalpaBookingRoutes.js";
import leadRoutes from "../routes/leadRoutes.js";
// import phonepepaymentRoutes from "../routes/phonepepaymentRoutes.js";

await connectDB();   // optional await if async

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/sankalpa-payments", sankaplapaymentRoutes);
app.use("/api/sankalpa-bookings", sankaplabookingRoutes);
app.use("/api/contactus", leadRoutes);
// app.use("/api/phonepe", phonepepaymentRoutes);

app.get("/", (req, res) => {
  res.send("Backend API Running 🚀");
});

export default app;
