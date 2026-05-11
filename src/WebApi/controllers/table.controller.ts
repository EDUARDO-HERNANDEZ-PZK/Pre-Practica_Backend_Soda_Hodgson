import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ITableService } from './../../Application/interfaces/table.service.interface';

@injectable()
export class TableController {

  private readonly _tableService: ITableService;

  constructor(@inject("ITableService") service: ITableService) {
    this._tableService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._tableService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._tableService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._tableService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._tableService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._tableService.delete(id);
    res.status(204).send();
  }
}
