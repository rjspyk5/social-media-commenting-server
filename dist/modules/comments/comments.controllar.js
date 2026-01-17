import { createCommentService, delteCommentService, disLikeComment, editCommentService, getAllCommentService, getComment, likeComment } from "./comments.service.js";
export const createComment = async (req, res, next) => {
    const text = req.body.text;
    const userId = req?.user?.id;
    const payload = {
        text,
        author: req?.user?.id
    };
    try {
        const result = await createCommentService(payload);
        return res.json({ success: true, data: result, message: "Comment created successfully" });
    }
    catch (error) {
        next(error);
    }
};
export const getAllComments = async (req, res, next) => {
    const { page = 1, limit = 10, sort = "newest" } = req.query;
    try {
        const result = await getAllCommentService({ page: Number(page), limit: Number(limit), sort: sort, });
        return res.json({ success: true, data: result, message: "Comment found successfully" });
    }
    catch (error) {
        next(error);
    }
};
export const giveLike = async (req, res, next) => {
    const commentId = req?.params?.id;
    const userId = req?.user?.id;
    try {
        const result = await likeComment(commentId, userId);
        return res.json({ success: true, data: result, message: "Comment liked successfully" });
    }
    catch (error) {
        next(error);
    }
};
export const giveDisLike = async (req, res, next) => {
    const commentId = req?.params?.id;
    const userId = req?.user?.id;
    try {
        const result = await disLikeComment(commentId, userId);
        return res.json({ success: true, data: result, message: "Comment liked successfully" });
    }
    catch (error) {
        next(error);
    }
};
export const deleteComment = async (req, res, next) => {
    const commentId = req.params.id;
    const userId = req?.user?.id;
    try {
        const result = await delteCommentService(commentId, userId);
        return res.json({ success: true, data: result, message: "Comment deleted successfully" });
    }
    catch (error) {
        next(error);
    }
};
export const editComment = async (req, res, next) => {
    const text = req.body.text;
    const commentId = req.params.id;
    const userId = req?.user?.id;
    try {
        const result = await editCommentService(text, commentId, userId);
        return res.json({ success: true, data: result, message: "Comment edited successfully" });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=comments.controllar.js.map