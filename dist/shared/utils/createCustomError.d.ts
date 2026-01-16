export type ApiError = Error & {
    statusCode: number;
};
export declare const createCustomError: ({ message, status }: {
    message?: string;
    status: number;
}) => Error;
//# sourceMappingURL=createCustomError.d.ts.map