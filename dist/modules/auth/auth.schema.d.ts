import z from "zod/v3";
export declare const registerSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    phone: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    name: string;
    phone?: number | undefined;
}, {
    email: string;
    password: string;
    name: string;
    phone?: number | undefined;
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type loginSchemaType = z.infer<typeof loginSchema>;
export type regSchemaType = z.infer<typeof registerSchema>;
//# sourceMappingURL=auth.schema.d.ts.map