import type { NextFunction, Request, Response } from "express"
import type { regSchemaType } from "./auth.schema.js";
import { loginService, registrationService, userDetailsService } from "./auth.service.js";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password ,name} = req.body ?? {};
    try {
        const token = await loginService({ email, password})
        res.json({
            success: true,
            message: "Login successfully",
            data: token
        })
    } catch (error: Error | any) {
        next(error)
    }

}

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password,name } = req.body ?? {};
    try {
        const user = await registrationService({ email, password,name  })
        return res.json({
            success: true,
            message: "User created successfully",
            data: [user]
        })

    } catch (error) {
        next(error)
    }
}



export const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const mail = req.params.mail

        if (!mail) {
            return res.status(404).json({ success: false, data: [], message: "Email is required" })
        }
        const user = await userDetailsService(mail)
        return res.json({ success: true, data: user, message: "User found successfully" })
    } catch (error) {
        next(error)
    }
}