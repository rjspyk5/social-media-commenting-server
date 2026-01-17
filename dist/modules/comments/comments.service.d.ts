import type mongoose from "mongoose";
export declare const getAllCommentService: () => Promise<(mongoose.Document<unknown, {}, {
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    toJSON: {
        transform: (_doc: mongoose.HydratedDocument<any>, ret: any) => any;
    };
}> & Omit<{
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export declare const createCommentService: (payload: {
    text: string;
    author: mongoose.Types.ObjectId;
}) => Promise<mongoose.Document<unknown, {}, {
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    toJSON: {
        transform: (_doc: mongoose.HydratedDocument<any>, ret: any) => any;
    };
}> & Omit<{
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
//# sourceMappingURL=comments.service.d.ts.map