import z from "zod/v3";
export declare const createCommentSchema: z.ZodObject<{
    text: z.ZodString;
    parentComment: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    text: string;
    parentComment?: string | null | undefined;
}, {
    text: string;
    parentComment?: string | null | undefined;
}>;
//# sourceMappingURL=comments.schema.d.ts.map