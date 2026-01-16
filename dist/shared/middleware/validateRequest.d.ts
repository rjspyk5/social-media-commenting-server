import type { Request, Response, NextFunction } from "express";
import type { ZodSchema } from "zod/v3";
export declare const validateReq: (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateRequest.d.ts.map