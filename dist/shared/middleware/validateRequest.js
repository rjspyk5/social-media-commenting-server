export const validateReq = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=validateRequest.js.map