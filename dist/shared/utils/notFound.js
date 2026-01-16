export const notFound = async (req, res) => {
    return res.status(404).json({
        success: false,
        message: "Route not found"
    });
};
//# sourceMappingURL=notFound.js.map