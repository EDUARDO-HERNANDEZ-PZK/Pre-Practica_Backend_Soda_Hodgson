import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IConversionsService } from './../../Application/interfaces/conversions.service.interface';

@injectable()
export class ConversionsController {

  private readonly _conversionsService: IConversionsService;

  constructor(@inject("IConversionsService") service: IConversionsService) {
    this._conversionsService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._conversionsService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._conversionsService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._conversionsService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._conversionsService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._conversionsService.delete(id);
    res.status(204).send();
  }
}
