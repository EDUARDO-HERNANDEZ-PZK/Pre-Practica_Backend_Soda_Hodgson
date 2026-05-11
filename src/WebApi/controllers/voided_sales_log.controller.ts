import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IVoided_sales_logService } from './../../Application/interfaces/voided_sales_log.service.interface';

@injectable()
export class Voided_sales_logController {

  private readonly _voided_sales_logService: IVoided_sales_logService;

  constructor(@inject("IVoided_sales_logService") service: IVoided_sales_logService) {
    this._voided_sales_logService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._voided_sales_logService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._voided_sales_logService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._voided_sales_logService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._voided_sales_logService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._voided_sales_logService.delete(id);
    res.status(204).send();
  }
}
