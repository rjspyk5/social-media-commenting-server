import type { NextFunction, Request, Response } from "express";
export declare const createComment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const getAllComments: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const likeDislikeToggle: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteComment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const editComment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=comments.controllar.d.ts.map