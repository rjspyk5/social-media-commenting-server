import type { NextFunction, Request, Response } from "express";
import type { ApiError } from "./createCustomError.js";
import { ZodError } from "zod/v3";
export declare const errorHandeler: (err: ApiError | ZodError, req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=errorHandeler.d.ts.map