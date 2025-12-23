import express from "express";
import * as controller from "../controllers/text.controller.js";

const router = express.Router();

router.get("/", controller.list);
router.post("/", controller.createText);
router.get("/:id", controller.get);
router.put("/:id", controller.updateText);
router.delete("/:id", controller.deleteText);

export default router;
