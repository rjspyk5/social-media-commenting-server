
import mongoose, { Schema, type HydratedDocument } from "mongoose";

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
    ]
}, {
    timestamps: true,
    toJSON: {
        transform: (_doc: HydratedDocument<any>, ret: any) => {
            ret.id = ret._id.toString()
            delete ret._id
            delete ret.createdAt
            delete ret.updatedAt
            delete ret.__v
            return ret
        }
    }
})

export const CommentModel = mongoose.model("Comment", commentSchema)