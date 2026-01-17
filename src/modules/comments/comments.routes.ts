import { Router } from "express";
import { createComment, getAllComments, giveDisLike, giveLike } from "./comments.controllar.js";
import { verifyToken } from "../../shared/middleware/verifyToken.js";

export const commentsRouter=Router();
commentsRouter.get("/",getAllComments)
commentsRouter.post("/",verifyToken,createComment)
commentsRouter.put("/like/:id",verifyToken,giveLike)
commentsRouter.put("/dislike/:id",verifyToken,giveDisLike)
// commentsRouter.delete("/:id",deleteComment)
// commentsRouter.put("/:id",editComment)