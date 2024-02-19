import express from "express";
const router = express.Router();
import controller from "../controllers/message.controller.js";

router.route("/")
.get(controller.getAllMessages)
.post(controller.createMessage);

export default router;
