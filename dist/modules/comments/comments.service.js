import { CommentModel } from "./comments.model.js";
import { Types } from "mongoose";
export const getAllCommentService = async ({ page = 1, limit = 10, sort = "newest", parentId = null }) => {
    const skip = (page - 1) * limit;
    let sortStage = {};
    switch (sort) {
        case "mostLiked":
            sortStage = { likeCount: -1 };
            break;
        case "mostDisliked":
            sortStage = { dislikeCount: -1 };
            break;
        case "oldest":
            sortStage = { createdAt: 1 };
            break;
        default:
            sortStage = { createdAt: -1 };
    }
    const allComments = await CommentModel.find().select("-__v").populate("author", "_id name").sort(sortStage).skip(skip).limit(Number(limit)).lean();
    const totalComment = await CommentModel.countDocuments();
    return {
        allComments,
        totalPages: Math.ceil(totalComment / limit),
        total: totalComment
    };
};
export const createCommentService = async (payload) => {
    const result = await CommentModel.create(payload);
    return result;
};
export const getComment = async (id) => {
    const result = await CommentModel.findById(id);
    return result;
};
export const likeComment = async (id, user) => {
    if (!Types.ObjectId.isValid(id) || !Types.ObjectId.isValid(user)) {
        throw new Error("Invalid id");
    }
    const userId = new Types.ObjectId(user);
    const comment = await CommentModel.findById(id).select("likes dislikes");
    if (!comment)
        throw new Error("Comment not found");
    if (comment.likes.includes(userId)) {
        throw new Error("You have already liked this comment");
    }
    const updated = await CommentModel.findByIdAndUpdate(id, {
        $addToSet: { likes: userId },
        $pull: { dislikes: userId },
        $inc: {
            likesCount: 1,
            dislikesCount: comment.dislikes.includes(userId) ? -1 : 0
        }
    }, { new: true });
    return {
        id: updated._id,
        likesCount: updated.likesCount,
        dislikesCount: updated.dislikesCount
    };
};
export const disLikeComment = async (id, user) => {
    if (!Types.ObjectId.isValid(id) || !Types.ObjectId.isValid(user)) {
        throw new Error("Invalid id");
    }
    const userId = new Types.ObjectId(user);
    const comment = await CommentModel.findById(id).select("likes dislikes");
    if (!comment)
        throw new Error("Comment not found");
    if (comment.dislikes.includes(userId)) {
        throw new Error("You have already disliked this comment");
    }
    const updateFilter = {
        $addToSet: { dislikes: userId },
        $pull: { likes: userId },
        $inc: {
            dislikesCount: 1,
            likesCount: comment.likes.includes(userId) ? -1 : 0
        }
    };
    const updated = await CommentModel.findByIdAndUpdate(id, updateFilter, { new: true });
    if (!updated) {
        throw new Error("Comment not found");
    }
    return {
        id: updated._id,
        likesCount: updated.likesCount,
        dislikesCount: updated.dislikesCount
    };
};
export const editCommentService = async (text, commentId, userId) => {
    if (!Types.ObjectId.isValid(commentId)) {
        throw new Error("Invalid comment id");
    }
    const comment = await CommentModel.findById(commentId);
    if (!comment) {
        throw new Error("Comment not found");
    }
    const isAuthorized = comment.author.equals(userId);
    if (!isAuthorized) {
        throw new Error("You are not authorized to edit this comment");
    }
    comment.text = text;
    await comment.save();
    return {
        id: comment._id,
        text: comment.text,
        updatedAt: comment.updatedAt
    };
};
export const delteCommentService = async (commentId, userId) => {
    if (!Types.ObjectId.isValid(commentId)) {
        throw new Error("Invalid comment id");
    }
    const comment = await CommentModel.findById(commentId);
    if (!comment) {
        throw new Error("Comment not found");
    }
    const isAuthorized = comment.author.equals(userId);
    if (!isAuthorized) {
        throw new Error("You are not authorized to edit this comment");
    }
    const result = await CommentModel.findByIdAndDelete(commentId);
    return result;
};
//# sourceMappingURL=comments.service.js.map