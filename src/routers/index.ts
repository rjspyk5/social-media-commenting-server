import { Router } from "express";
import { authRouter } from "../modules/auth/auth.routes.js";

import { parcelRouter } from "../modules/parcel-management/parcel.routes.js";
import { userRouter } from "../modules/users/userRouter.js";
export const routeEntry = Router();
routeEntry.use("/auth", authRouter);
routeEntry.use("/user", userRouter);
routeEntry.use("/parcel",parcelRouter);
