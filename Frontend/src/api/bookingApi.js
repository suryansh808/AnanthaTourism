import api from "./apiConfig";

export const createBooking = (bookingData) => {
  return api.post("/bookings/book", bookingData);
};
