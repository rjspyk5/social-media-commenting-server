import type mongoose from "mongoose";
import { CommentModel } from "./comments.model.js"
import { Types } from "mongoose";

export const getAllCommentService = async () => {
    const result = await CommentModel.find()
    return result;
}

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

export const createCommentService = async (payload: { text: string, author: mongoose.Types.ObjectId }) => {
    const result = await CommentModel.create(payload)
    return result
}

export const getComment = async (id: string) => {
    const result = await CommentModel.findById(id)
    return result
}

export const likeComment = async (id: string, user: string) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new Error("Invalid comment id")
    }

    if (!Types.ObjectId.isValid(user)) {
        throw new Error("Invalid user id")
    }
    const comment = await CommentModel.findById(id)

    if (!comment) {
        throw new Error("Comment not found")
    }

    const userObjectId = new Types.ObjectId(user)
    const isAlreadyLike = comment.likes.some(
        (id) => String(id) === user
    )
    if (isAlreadyLike) {
        throw new Error("You have already liked this comment");
    }
    comment.dislikes = comment.dislikes.filter(id => String(id) !== user);
    comment.likes.push(userObjectId)
    await comment.save()
    return {
        id: comment._id,
        likesCount: comment.likes.length,
        dislikesCount: comment.dislikes.length
    }
}
export const disLikeComment = async (id: string, user: string) => {
    if (!Types.ObjectId.isValid(id)) {
        throw new Error("Invalid comment id")
    }

    if (!Types.ObjectId.isValid(user)) {
        throw new Error("Invalid user id")
    }
    const comment = await CommentModel.findById(id)

    if (!comment) {
        throw new Error("Comment not found")
    }

    const userObjectId = new Types.ObjectId(user)
    const isAlreadyDisLike = comment.dislikes.some(
        (id) => String(id) === user
    )
    if (isAlreadyDisLike) {
        throw new Error("You have already disliked this comment");
    }
    comment.likes = comment.likes.filter(id => String(id) !== user);
    comment.dislikes.push(userObjectId)
    await comment.save()
    return {
        id: comment._id,
        likesCount: comment.likes.length,
        dislikesCount: comment.dislikes.length
    }
}

export const editCommentService = async (text: string, commentId: string, userId: string) => {
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
}

export const delteCommentService = async (commentId: string) => {
    if (!Types.ObjectId.isValid(commentId)) {
        throw new Error("Invalid comment id");
    }

    const comment = await CommentModel.findById(commentId);

    if (!comment) {
        throw new Error("Comment not found");
    }
    const result = await CommentModel.findByIdAndDelete(commentId);
    return result

}