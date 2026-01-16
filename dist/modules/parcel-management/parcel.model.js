// src/models/Parcel.model.ts
import { Schema, model, Types } from "mongoose";
import {} from "./parcel.schema.js";
const LocationSchema = new Schema({
    address: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
}, { _id: false });
const ParcelSchema = new Schema({
    customer: { type: Types.ObjectId, ref: "User", required: true, index: true },
    pickup: { type: LocationSchema, required: true },
    delivery: { type: LocationSchema, required: true },
    parcelType: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        enum: ["COD", "Prepaid"],
        required: true,
    },
    codAmount: { type: Number, default: 0 },
    status: {
        type: String,
        enum: ["Pending", "Assigned", "Picked Up", "In Transit", "Delivered", "Failed"],
        default: "Pending",
    },
    assignedAgent: { type: Types.ObjectId, ref: "User", default: null, index: true },
}, { timestamps: true });
export const Parcel = model("Parcel", ParcelSchema);
//# sourceMappingURL=parcel.model.js.map