import jwt from "jsonwebtoken";
export const generateJwtToken = (email, id) => {
    const token = jwt.sign({ email, id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return token;
};
//# sourceMappingURL=generateToken.js.map