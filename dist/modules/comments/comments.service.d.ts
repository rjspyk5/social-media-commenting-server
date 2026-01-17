import type mongoose from "mongoose";
import { Types } from "mongoose";
export declare const getAllCommentService: () => Promise<(mongoose.Document<unknown, {}, {
    text: string;
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    dislikes: Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    toJSON: {
        transform: (_doc: mongoose.HydratedDocument<any>, ret: any) => any;
    };
}> & Omit<{
    text: string;
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    dislikes: Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: Types.ObjectId;
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
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    dislikes: Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    toJSON: {
        transform: (_doc: mongoose.HydratedDocument<any>, ret: any) => any;
    };
}> & Omit<{
    text: string;
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    dislikes: Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}>;
export declare const getComment: (id: string) => Promise<(mongoose.Document<unknown, {}, {
    text: string;
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    dislikes: Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    toJSON: {
        transform: (_doc: mongoose.HydratedDocument<any>, ret: any) => any;
    };
}> & Omit<{
    text: string;
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    dislikes: Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}) | null>;
export declare const likeComment: (id: string, user: string) => Promise<{
    id: Types.ObjectId;
    likesCount: number;
    dislikesCount: number;
}>;
export declare const disLikeComment: (id: string, user: string) => Promise<{
    id: Types.ObjectId;
    likesCount: number;
    dislikesCount: number;
}>;
export declare const editCommentService: (text: string, commentId: string, userId: string) => Promise<{
    id: Types.ObjectId;
    text: string;
    updatedAt: NativeDate;
}>;
export declare const delteCommentService: (commentId: string) => Promise<(mongoose.Document<unknown, {}, {
    text: string;
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    dislikes: Types.ObjectId[];
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    toJSON: {
        transform: (_doc: mongoose.HydratedDocument<any>, ret: any) => any;
    };
}> & Omit<{
    text: string;
    author: Types.ObjectId;
    likes: Types.ObjectId[];
    dislikes: Types.ObjectId[];
} & mongoose.DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}) | null>;
//# sourceMappingURL=comments.service.d.ts.map