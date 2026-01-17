import mongoose, { Schema } from "mongoose";
const commentSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    likesCount: {
        type: Number,
        default: 0,
        min: 0,
        index: true,
    },
    dislikesCount: {
        type: Number,
        default: 0,
        min: 0,
        index: true,
    },
}, {
    timestamps: true,
    toJSON: {
        transform: (_doc, ret) => {
            ret.id = ret._id.toString();
            delete ret._id;
            delete ret.createdAt;
            delete ret.updatedAt;
            delete ret.__v;
            return ret;
        }
    }
});
commentSchema.index({ createdAt: -1 });
commentSchema.index({ likesCount: -1 });
commentSchema.index({ dislikesCount: -1 });
export const CommentModel = mongoose.model("Comment", commentSchema);
//# sourceMappingURL=comments.model.js.map