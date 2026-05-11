import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { ICash_SessionsService } from './../../Application/interfaces/cash_sessions.service.interface';

@injectable()
export class Cash_SessionsController {

  private readonly _cash_sessionsService: ICash_SessionsService;

  constructor(@inject("ICash_SessionsService") service: ICash_SessionsService) {
    this._cash_sessionsService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._cash_sessionsService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._cash_sessionsService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._cash_sessionsService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._cash_sessionsService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._cash_sessionsService.delete(id);
    res.status(204).send();
  }
}
