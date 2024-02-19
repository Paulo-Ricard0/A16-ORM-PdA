import express from "express";
const router = express.Router();
import controller from "../controllers/category.controller.js";

router
  .route("/")
  .get(controller.getAllCategories)
  .post(controller.createCategory);

router.route("/:id").get(controller.getCategoryById);

export default router;
