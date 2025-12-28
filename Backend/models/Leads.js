import mongoose from "mongoose";

const leadsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
            phone: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        interests: {
            type: String,
            required: true,
        },
       
    },
    { timestamps: true }
);

export default mongoose.model('Leads', leadsSchema);