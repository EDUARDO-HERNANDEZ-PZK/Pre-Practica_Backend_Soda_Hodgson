import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ISales_detailsService } from './../../Application/interfaces/sales_details.service.interface';

@injectable()
export class Sales_detailsController {

  private readonly _sales_detailsService: ISales_detailsService;

  constructor(@inject("ISales_detailsService") service: ISales_detailsService) {
    this._sales_detailsService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._sales_detailsService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._sales_detailsService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._sales_detailsService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._sales_detailsService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._sales_detailsService.delete(id);
    res.status(204).send();
  }
}
