import { CommentModel } from "./comments.model.js";
export const getAllCommentService = async () => {
    const result = await CommentModel.find();
    return result;
};
export const createCommentService = async (payload) => {
    const result = await CommentModel.create(payload);
    return result;
};
//# sourceMappingURL=comments.service.js.map