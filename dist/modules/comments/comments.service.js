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
// const getComments = async (req, res) => {
//   const { sort = "newest", page = 1, limit = 10 } = req.query;
//   const sortMap = {
//     newest: { createdAt: -1 },
//     likes: { "likes.length": -1 },
//     dislikes: { "dislikes.length": -1 }
//   };
//   const comments = await Comment.find({ parentId: null })
//     .sort(sortMap[sort])
//     .skip((page - 1) * limit)
//     .limit(Number(limit));
//   res.json(comments);
// };
export const createCommentService = async (payload) => {
    const result = await CommentModel.create(payload);
    return result;
};
export const getComment = async (id) => {
    const result = await CommentModel.findById(id);
    return result;
};
export const likeComment = async (id, user) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new Error("Invalid comment id");
    }
    if (!Types.ObjectId.isValid(user)) {
        throw new Error("Invalid user id");
    }
    const userObjectId = new Types.ObjectId(user);
    const updated = await CommentModel.findOneAndUpdate({
        _id: id,
        likes: { $ne: userObjectId } // prevent double-like
    }, {
        $push: { likes: userObjectId },
        $pull: { dislikes: userObjectId },
        $inc: { likesCount: 1, dislikesCount: -1 }
    }, { new: true });
    if (!updated) {
        throw new Error("You have already liked this comment");
    }
    return {
        id: updated._id,
        likesCount: updated.likesCount,
        dislikesCount: updated.dislikesCount
    };
};
export const disLikeComment = async (id, user) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new Error("Invalid comment id");
    }
    if (!Types.ObjectId.isValid(user)) {
        throw new Error("Invalid user id");
    }
    const userObjectId = new Types.ObjectId(user);
    const updated = await CommentModel.findOneAndUpdate({
        _id: id,
        dislikes: { $ne: userObjectId }
    }, {
        $push: { dislikes: userObjectId },
        $pull: { likes: userObjectId },
        $inc: { dislikesCount: 1, likesCount: -1 }
    }, { new: true });
    if (!updated) {
        throw new Error("You have already disliked this comment");
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
    comment.text = text;
    await comment.save();
    return {
        id: comment._id,
        text: comment.text,
        updatedAt: comment.updatedAt
    };
};
export const delteCommentService = async (commentId) => {
    if (!Types.ObjectId.isValid(commentId)) {
        throw new Error("Invalid comment id");
    }
    const comment = await CommentModel.findById(commentId);
    if (!comment) {
        throw new Error("Comment not found");
    }
    const result = await CommentModel.findByIdAndDelete(commentId);
    return result;
};
//# sourceMappingURL=comments.service.js.map