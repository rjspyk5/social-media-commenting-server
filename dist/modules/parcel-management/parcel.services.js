// src/services/parcel.service.ts
import { Parcel } from "./parcel.model.js";
export const createParcelService = async (userId, payload) => {
    const parcel = await Parcel.create({
        ...payload,
        codAmount: payload.paymentMethod === "COD" ? payload.codAmount : 0,
        customer: userId,
    });
    return parcel;
};
export const getAllParcelsService = async () => {
    const parcels = await Parcel.find();
    return parcels;
};
//# sourceMappingURL=parcel.services.js.map