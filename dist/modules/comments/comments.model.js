import mongoose, { Schema } from "mongoose";
export const commentSchema = new Schema({
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
}, { timestamps: true });
module.exports = mongoose.model("Comment", commentSchema);
//# sourceMappingURL=comments.model.js.map