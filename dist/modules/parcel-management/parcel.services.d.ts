export declare const createParcelService: (userId: string, payload: any) => Promise<(import("mongoose").Document<unknown, {}, {
    status: "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
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
    customer: import("mongoose").Types.ObjectId;
    assignedAgent?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
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
    customer: import("mongoose").Types.ObjectId;
    assignedAgent?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export declare const getAllParcelsService: () => Promise<(import("mongoose").Document<unknown, {}, {
    status: "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
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
    customer: import("mongoose").Types.ObjectId;
    assignedAgent?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
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
    customer: import("mongoose").Types.ObjectId;
    assignedAgent?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
//# sourceMappingURL=parcel.services.d.ts.map