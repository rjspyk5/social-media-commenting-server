import { compare, genSalt, hash } from "bcrypt-ts";
export const hashPassword = async (password) => {
    const salt = await genSalt(10);
    const result = await hash(password, salt);
    return result;
};
export const comparePassword = async (password, hashedPassword) => {
    return await compare(password, hashedPassword);
};
//# sourceMappingURL=bcryptPassword.js.map