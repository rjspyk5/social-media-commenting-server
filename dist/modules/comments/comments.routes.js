import { Router } from "express";
import { getAllComments } from "./comments.controllar.js";
export const commentsRouter = Router();
commentsRouter.get("/", getAllComments);
// commentsRouter.post("/",createComment)
// commentsRouter.put("/like/:id",likeDislikeToggle)
// commentsRouter.put("/dislike/:id",likeDislikeToggle)
// commentsRouter.delete("/:id",deleteComment)
// commentsRouter.put("/:id",editComment)
//# sourceMappingURL=comments.routes.js.map