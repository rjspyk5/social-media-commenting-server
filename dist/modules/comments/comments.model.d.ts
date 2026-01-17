import mongoose, { type HydratedDocument } from "mongoose";
export declare const CommentModel: mongoose.Model<{
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
    likesCount: number;
    dislikesCount: number;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
    likesCount: number;
    dislikesCount: number;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
    toJSON: {
        transform: (_doc: HydratedDocument<any>, ret: any) => any;
    };
}> & Omit<{
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
    likesCount: number;
    dislikesCount: number;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    toJSON: {
        transform: (_doc: HydratedDocument<any>, ret: any) => any;
    };
}, {
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
    likesCount: number;
    dislikesCount: number;
} & mongoose.DefaultTimestampProps, any, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, any> | undefined;
}, {
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
    likesCount: number;
    dislikesCount: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    text: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    dislikes: mongoose.Types.ObjectId[];
    likesCount: number;
    dislikesCount: number;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=comments.model.d.ts.map