import type { Response } from "express";
export declare const responseGenarator: ({ message, data, res }: {
    message?: string;
    data?: any[];
    res: Response;
}) => Response<any, Record<string, any>>;
//# sourceMappingURL=responseGenarator.d.ts.map