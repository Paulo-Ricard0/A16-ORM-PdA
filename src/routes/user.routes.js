import express from "express";
const router = express.Router();
import controller from "../controllers/user.controller.js";

router.route("/")
.get(controller.getAllUsers)
.post(controller.registerUser);

router.route("/:id").get(controller.getUserById);

export default router;
