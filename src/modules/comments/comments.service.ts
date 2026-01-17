import type mongoose from "mongoose";
import { CommentModel } from "./comments.model.js"

export const getAllCommentService = async () => {
    const result = await CommentModel.find()
    return result;
}

export const createCommentService = async (payload:{text:string, author:mongoose.Types.ObjectId}) => {
    const result = await CommentModel.create(payload)
    return result
}