import express from "express";
import { container } from "tsyringe";
import { Measurement_unitsController } from "../controllers/measurement_units.controller";

const router = express.Router();
const controller = container.resolve(Measurement_unitsController);

router.post("/", controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
