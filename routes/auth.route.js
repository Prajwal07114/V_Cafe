
import express from "express";
import { signup, login, logout,updateprofile,authcheck} from "../controllers/auth.controller.js";
import {protectedRoute} from "../middleware/auth.middleware.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile",protectedRoute,updateprofile);
router.get("/check",protectedRoute,authcheck);
export default router;
