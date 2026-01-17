import type { NextFunction, Request, Response } from "express"
import jwt, { type JwtPayload } from "jsonwebtoken";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ success: false, message: "Unauthorized" })
    }
    try {
        const result = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload
        (req as any).user = result
        next()
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}