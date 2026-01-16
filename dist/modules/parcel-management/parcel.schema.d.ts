import z from "zod/v3";
export declare const locationSchema: z.ZodObject<{
    address: z.ZodString;
    lat: z.ZodNumber;
    lng: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    address: string;
    lat: number;
    lng: number;
}, {
    address: string;
    lat: number;
    lng: number;
}>;
export declare const parcelSchema: z.ZodObject<{
    parcelType: z.ZodString;
    pickup: z.ZodObject<{
        address: z.ZodString;
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        lat: number;
        lng: number;
    }, {
        address: string;
        lat: number;
        lng: number;
    }>;
    delivery: z.ZodObject<{
        address: z.ZodString;
        lat: z.ZodNumber;
        lng: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        lat: number;
        lng: number;
    }, {
        address: string;
        lat: number;
        lng: number;
    }>;
    paymentMethod: z.ZodEnum<["Prepaid", "COD"]>;
    codAmount: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    parcelType: string;
    pickup: {
        address: string;
        lat: number;
        lng: number;
    };
    delivery: {
        address: string;
        lat: number;
        lng: number;
    };
    paymentMethod: "Prepaid" | "COD";
    codAmount: number;
}, {
    parcelType: string;
    pickup: {
        address: string;
        lat: number;
        lng: number;
    };
    delivery: {
        address: string;
        lat: number;
        lng: number;
    };
    paymentMethod: "Prepaid" | "COD";
    codAmount?: number | undefined;
}>;
export type parcelSchemaType = z.infer<typeof parcelSchema>;
export type locationSchemaType = z.infer<typeof locationSchema>;
//# sourceMappingURL=parcel.schema.d.ts.map