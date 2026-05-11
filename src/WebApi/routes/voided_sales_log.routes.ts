import express from "express";
import { container } from "tsyringe";
import { Voided_sales_logController } from "../controllers/voided_sales_log.controller";

const router = express.Router();
const controller = container.resolve(Voided_sales_logController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
