import type { NextFunction, Request, Response } from "express";
import { createCommentService, getAllCommentService } from "./comments.service.js";

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
    const userEmail = req?.user?.email;

    const isAlreadyLike = false;
    const isAlreadyDislike = false;
    // todo:remove dislike\
    // todo:add like
}


export const deleteComment = async (req: Request, res: Response, next: NextFunction) => {

}

export const editComment = async (req: Request, res: Response, next: NextFunction) => {

}