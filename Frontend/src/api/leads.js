import api from "./apiConfig";

export const createLead = (payload) =>
  api.post("/contactus", payload);


