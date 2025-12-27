import api from "./apiConfig";

export const createOrder = (amount) =>
  api.post("/sankalpa-payments/create-order", { amount });

export const verifyPayment = (data) =>
  api.post("/sankalpa-payments/verify", data);

export const saveBooking = (data) =>
  api.post("/sankalpa-bookings", data);
