import express from "express";
import { container } from "tsyringe";
import { Cash_SessionsController } from "../controllers/cash_sessions.controller";

const router = express.Router();
const controller = container.resolve(Cash_SessionsController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
