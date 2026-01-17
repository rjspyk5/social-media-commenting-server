import jwt from "jsonwebtoken";
import type mongoose from "mongoose";

export const generateJwtToken = (email: string,id:mongoose.Types.ObjectId): string => {
    const token = jwt.sign({ email,id }, process.env.JWT_SECRET as string, { expiresIn: "7d" })
    return token
}

