import type { loginSchemaType, regSchemaType } from "./auth.schema.js";
export declare const registrationService: (data: regSchemaType) => Promise<string>;
export declare const loginService: (data: loginSchemaType) => Promise<string>;
export declare const userDetailsService: (email: string) => Promise<import("mongoose").Document<unknown, {}, {
    email: string;
    password: string;
    role?: string | undefined;
    phone?: number | undefined;
}, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<{
    email: string;
    password: string;
    role?: string | undefined;
    phone?: number | undefined;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
//# sourceMappingURL=auth.service.d.ts.map