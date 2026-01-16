import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod/v3";

export const validateReq = (schema: ZodSchema) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            next(error);
        }
    };
