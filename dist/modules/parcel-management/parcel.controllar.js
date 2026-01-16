import { createParcelService, getAllParcelsService } from "./parcel.services.js";
export const createParcel = async (req, res, next) => {
    const data = req.body;
    try {
        const result = await createParcelService(data.userId, data);
        return res.json({
            message: "Parcel booked successfully",
            success: true,
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
export const getAllParcels = async (req, res, next) => {
    try {
        const result = await getAllParcelsService();
        return res.json({ success: true, data: result, message: "Parcels found successfully" });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=parcel.controllar.js.map