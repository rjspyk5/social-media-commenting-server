import type { NextFunction, Request, Response } from "express";
import { createCommentService, disLikeComment, getAllCommentService, getComment, likeComment } from "./comments.service.js";

export const createComment = async (req: Request, res: Response, next: NextFunction) => {
    const text = req.body.text;
    const userId = req?.user?.id;
    const payload = {
        text,
        author: req?.user?.id
    }
    try {
        const result = await createCommentService(payload)
        return res.json({ success: true, data: result, message: "Comment created successfully" })
    } catch (error) {
        next(error)
    }
}


export const getAllComments = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getAllCommentService()
        return res.json({ success: true, data: result, message: "Comment found successfully" })
    } catch (error) {
        next(error)
    }
}


export const giveLike = async (req: Request, res: Response, next: NextFunction) => {
    const commentId = req?.params?.id
    const userId = req?.user?.id;
    try {
        const result = await likeComment(commentId as string, userId as string)
        return res.json({ success: true, data: result, message: "Comment liked successfully" })
    } catch (error) {
        next(error)
    }
}
export const giveDisLike = async (req: Request, res: Response, next: NextFunction) => {
    const commentId = req?.params?.id
    const userId = req?.user?.id;
    try {
        const result = await disLikeComment(commentId as string, userId as string)
        return res.json({ success: true, data: result, message: "Comment liked successfully" })
    } catch (error) {
        next(error)
    }
}


export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {

}

export const editComment = async (req: Request, res: Response, next: NextFunction) => {

}