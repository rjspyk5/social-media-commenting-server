import z from "zod/v3";
export const locationSchema = z.object({
    address: z.string().min(3),
    lat: z.number(),
    lng: z.number()
});
export const parcelSchema = z.object({
    parcelType: z.string(),
    pickup: locationSchema,
    delivery: locationSchema,
    paymentMethod: z.enum(["Prepaid", "COD"]),
    codAmount: z.number().default(0),
});
//# sourceMappingURL=parcel.schema.js.map