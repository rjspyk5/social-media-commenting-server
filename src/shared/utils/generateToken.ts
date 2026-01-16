import jwt from "jsonwebtoken";

export const generateJwtToken = (email: string): string => {
    const token = jwt.sign({ email }, process.env.JWT_SECRET as string, { expiresIn: "7d" })
    return token
}

export const verifyJwt = (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET as string)
}