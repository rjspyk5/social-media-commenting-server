export declare const getAllCommentService: () => Promise<(import("mongoose").Document<unknown, {}, {
    text: string;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    dislikes: import("mongoose").Types.ObjectId[];
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    text: string;
    author: import("mongoose").Types.ObjectId;
    likes: import("mongoose").Types.ObjectId[];
    dislikes: import("mongoose").Types.ObjectId[];
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
//# sourceMappingURL=comments.service.d.ts.map