import { verifyJwt } from "../utils/generateToken.js";
export const verifyToken = (token) => {
    const result = verifyJwt(token);
    return result;
};
//# sourceMappingURL=verifyToken.js.map