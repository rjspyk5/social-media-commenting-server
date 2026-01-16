
export type ApiError = Error & {
    statusCode: number,
};

export const createCustomError = ({ message = "Something went wrong", status }: { message?: string, status: number }): Error => {
    const error = new Error(message) as ApiError;
    error.statusCode = status;
    return error
}