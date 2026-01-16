import z from "zod/v3";

export const createCommentSchema = z.object({
    text: z
        .string()
        .min(1, "Comment cannot be empty")
        .max(1000, "Comment too long"),

    parentComment: z
        .string()
        .optional()
        .nullable()
});


