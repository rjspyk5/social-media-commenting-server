export const responseGenarator = ({ message = "", data = [], res }) => {
    return res.status(200).json({ success: true, message, data });
};
//# sourceMappingURL=responseGenarator.js.map