import { Router } from "express";
import { createComment, deleteComment, editComment, getAllComments, giveDisLike, giveLike } from "./comments.controllar.js";
import { verifyToken } from "../../shared/middleware/verifyToken.js";
export const commentsRouter = Router();
commentsRouter.get("/", getAllComments);
commentsRouter.post("/", verifyToken, createComment);
commentsRouter.put("/like/:id", verifyToken, giveLike);
commentsRouter.put("/dislike/:id", verifyToken, giveDisLike);
commentsRouter.put("/:id", verifyToken, editComment);
commentsRouter.delete("/:id", verifyToken, deleteComment);
//# sourceMappingURL=comments.routes.js.map