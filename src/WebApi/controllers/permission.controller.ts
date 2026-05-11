import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IPermissionService } from './../../Application/interfaces/permission.service.interface';

@injectable()
export class PermissionController {

  private readonly _permissionService: IPermissionService;

  constructor(@inject("IPermissionService") service: IPermissionService) {
    this._permissionService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._permissionService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._permissionService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._permissionService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._permissionService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._permissionService.delete(id);
    res.status(204).send();
  }
}
