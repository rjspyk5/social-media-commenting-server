import type { Response } from "express"

export const responseGenarator = ({ message = "", data = [], res }: { message?: string, data?: any[], res: Response }) => {
    return res.status(200).json({ success: true, message, data })
}