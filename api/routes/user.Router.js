import { Router } from "express";
import { signInUser, signUpUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/auth/sign-up", signUpUser);
router.post("/auth/sign-in", signInUser);

export default router;
