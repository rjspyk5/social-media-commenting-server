import { Router } from "express";
import { getUser, login, register } from "./auth.controllar.js";
import { validateReq } from "../../shared/middleware/validateRequest.js";
import { loginSchema, registerSchema } from "./auth.schema.js";
export const authRouter = Router();
authRouter.post("/login", validateReq(loginSchema), login);
authRouter.post("/reg", validateReq(registerSchema), register);
authRouter.get("/:mail", getUser);
//# sourceMappingURL=auth.routes.js.map