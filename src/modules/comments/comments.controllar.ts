import type { NextFunction, Request, Response } from "express";
import { getAllCommentService } from "./comments.service.js";

export const createComment = async (req: Request, res: Response, next: NextFunction) => {


}


export const getAllComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getAllCommentService()
        return res.json({ success: true, data: result, message: "Comment found successfully" })
    } catch (error) {
        next(error)
    }
}
export const likeDislikeToggle = async (req: Request, res: Response, next: NextFunction) => {


}

export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {

}

export const editComment = async (req: Request, res: Response, next: NextFunction) => {

}