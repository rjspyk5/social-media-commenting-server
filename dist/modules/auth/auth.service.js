import { comparePassword } from "../../shared/utils/bcryptPassword.js";
import { generateJwtToken } from "../../shared/utils/generateToken.js";
import { UserModel } from "./auth.model.js";
export const registrationService = async (data) => {
    const userExist = await UserModel.findOne({ email: data.email });
    if (userExist) {
        throw new Error("User already exists with this email");
    }
    const { email } = await UserModel.create(data);
    return email;
};
export const loginService = async (data) => {
    const userExist = await UserModel.findOne({ email: data.email }).select("+password");
    if (!userExist) {
        throw new Error("User does not exist with this email");
    }
    const isPasswordMatched = await comparePassword(data.password, userExist.password);
    if (!isPasswordMatched) {
        throw new Error("Invalid Password");
    }
    const token = generateJwtToken(userExist.email);
    return token;
};
export const userDetailsService = async (email) => {
    console.log(email);
    const userExist = await UserModel.findOne({ email: email });
    if (!userExist) {
        throw new Error("User does not exist with this email");
    }
    return userExist;
};
//# sourceMappingURL=auth.service.js.map