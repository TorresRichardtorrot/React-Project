import { Router } from "express";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { authRequired } from "../middlewares/validateToken.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

router.get("/verify", verifyToken);

export default router;
