import api from "./apiConfig";

export const createLead = (payload) =>
  api.post("/leads", payload);


