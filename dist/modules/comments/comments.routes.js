import { Router } from "express";
import { createComment, getAllComments } from "./comments.controllar.js";
import { verifyToken } from "../../shared/middleware/verifyToken.js";
export const commentsRouter = Router();
commentsRouter.get("/", getAllComments);
commentsRouter.post("/", verifyToken, createComment);
// commentsRouter.put("/like/:id",likeDislikeToggle)
// commentsRouter.put("/dislike/:id",likeDislikeToggle)
// commentsRouter.delete("/:id",deleteComment)
// commentsRouter.put("/:id",editComment)
//# sourceMappingURL=comments.routes.js.map