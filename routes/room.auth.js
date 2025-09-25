import express from "express";
import { protectedRoute } from "../middleware/auth.middleware";
import { roomdata,rooms_data,room_id,joinroom,users_room,leaveroom} from "../controllers/room.controller";
const router = express.Router();

router.post("/room",protectedRoute,roomdata)
router.get("/rooms",rooms_data)
router.get("/room/:id",protectedRoute,room_id)
router.put("/room/join",protectedRoute,joinroom)
router.get("/room/users",protectedRoute,users_room)
router.post("/room/exit",protectedRoute,leaveroom)

export default router;