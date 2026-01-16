export const createCustomError = ({ message = "Something went wrong", status }) => {
    const error = new Error(message);
    error.statusCode = status;
    return error;
};
//# sourceMappingURL=createCustomError.js.map