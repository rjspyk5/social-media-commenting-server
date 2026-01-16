import { CommentModel } from "./comments.model.js"

export const getAllCommentService = async () => {
    const result = await CommentModel.find()
    return result;
}