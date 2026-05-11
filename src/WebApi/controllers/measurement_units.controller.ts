import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IMeasurement_unitsService } from './../../Application/interfaces/measurement_units.service.interface';

@injectable()
export class Measurement_unitsController {

  private readonly _measurement_unitsService: IMeasurement_unitsService;

  constructor(@inject("IMeasurement_unitsService") service: IMeasurement_unitsService) {
    this._measurement_unitsService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._measurement_unitsService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._measurement_unitsService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._measurement_unitsService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._measurement_unitsService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._measurement_unitsService.delete(id);
    res.status(204).send();
  }
}
