import mongoose from "mongoose";
export declare const commentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    (label?: string): void;
    (label?: string): void;
}, {
    text: string;
    author: mongoose.Types.ObjectId;
    likes?: mongoose.Types.ObjectId | null;
    dislikes?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    text: string;
    author: mongoose.Types.ObjectId;
    likes?: mongoose.Types.ObjectId | null;
    dislikes?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    (label?: string): void;
    (label?: string): void;
}>> & Omit<{
    text: string;
    author: mongoose.Types.ObjectId;
    likes?: mongoose.Types.ObjectId | null;
    dislikes?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        text: string;
        author: mongoose.Types.ObjectId;
        likes?: mongoose.Types.ObjectId | null;
        dislikes?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        (label?: string): void;
        (label?: string): void;
    }>> & Omit<{
        text: string;
        author: mongoose.Types.ObjectId;
        likes?: mongoose.Types.ObjectId | null;
        dislikes?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    text: string;
    author: mongoose.Types.ObjectId;
    likes?: mongoose.Types.ObjectId | null;
    dislikes?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=comments.model.d.ts.map