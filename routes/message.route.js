import express from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { usersidebar,getmessage,sendmessage} from "../controllers/message.controller.js";
const router = express.Router();


router.get("/Users",protectedRoute,usersidebar);

router.get("/:id",protectedRoute,getmessage);

router.get("/send/:id",protectedRoute,sendmessage);

export default router;