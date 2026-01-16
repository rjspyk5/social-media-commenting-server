import { getAllCommentService } from "./comments.service.js";
export const createComment = async (req, res, next) => {
};
export const getAllComments = async (req, res, next) => {
    try {
        const result = await getAllCommentService();
        return res.json({ success: true, data: result, message: "Comment found successfully" });
    }
    catch (error) {
        next(error);
    }
};
export const likeDislikeToggle = async (req, res, next) => {
};
export const deleteComment = async (req, res, next) => {
};
export const editComment = async (req, res, next) => {
};
//# sourceMappingURL=comments.controllar.js.map