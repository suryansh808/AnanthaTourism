// import mongoose from "mongoose";

// const bookingSchema = new mongoose.Schema(
//   {
//     bookingId: { type: String, required: true, unique: true },

//     packageDetails: {
//       id: Number,
//       title: String,
//       destination: String,
//       duration: String,
//       price: String,
//     },

//     customerDetails: {
//       fullName: String,
//       email: String,
//       phone: String,
//       numberOfTravelers: Number,
//     },

//     totalAmount: { type: Number, required: true },

//     payment: {
//       gateway: {
//         type: String,
//         enum: ["PHONEPE", "RAZORPAY"],
//         default: "PHONEPE",
//       },

//       // PhonePe identifiers
//       merchantTransactionId: { type: String },   // your unique txn id
//       providerReferenceId: { type: String },     // PhonePe reference, if available

//       // Generic status lifecycle
//       status: {
//         type: String,
//         enum: ["CREATED", "PENDING", "SUCCESS", "FAILED"],
//         default: "PENDING",
//       },

//       // Store full response for audit / disputes / reconciliation
//       rawResponse: { type: Object },
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("PhonePeBooking", bookingSchema);
