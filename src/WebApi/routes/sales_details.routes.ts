import express from "express";
import { container } from "tsyringe";
import { Sales_detailsController } from "../controllers/sales_details.controller";

const router = express.Router();
const controller = container.resolve(Sales_detailsController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
