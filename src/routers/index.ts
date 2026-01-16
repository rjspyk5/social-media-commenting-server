import { Router } from "express";
import { authRouter } from "../modules/auth/auth.routes.js";
import { commentsRouter } from "../modules/comments/comments.routes.js";

export const routeEntry = Router();
routeEntry.use("/auth", authRouter);
routeEntry.use("/comments", commentsRouter);

