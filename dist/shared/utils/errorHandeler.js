import { ZodError } from "zod/v3";
export const errorHandeler = async (err, req, res, next) => {
    if (err instanceof ZodError) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: err.issues.map(issue => ({
                field: issue.path[0] ?? null,
                message: issue.message
            }))
        });
    }
    const statusCode = err.statusCode ?? 500;
    return res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });
};
//# sourceMappingURL=errorHandeler.js.map