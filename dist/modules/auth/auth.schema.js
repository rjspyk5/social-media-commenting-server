import z from "zod/v3";
export const registerSchema = z.object({
    email: z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .min(1, "Email cannot be empty"),
    password: z
        .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    })
        .min(1, "Password cannot be empty"),
    role: z
        .string({
        required_error: "Role is required",
        invalid_type_error: "Role must be a string",
    })
        .min(1, "Role cannot be empty")
        .optional(),
    phone: z.number().optional()
});
export const loginSchema = z.object({
    email: z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .min(1, "Email cannot be empty"),
    password: z
        .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    })
        .min(1, "Password cannot be empty"),
});
//# sourceMappingURL=auth.schema.js.map