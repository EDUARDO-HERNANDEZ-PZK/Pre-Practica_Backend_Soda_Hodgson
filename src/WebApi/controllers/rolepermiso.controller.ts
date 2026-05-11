import { inject, injectable } from "tsyringe";
import { Request, Response } from "express";
import { IRolePermisoService } from './../../Application/interfaces/rolepermiso.service.interface';

@injectable()
export class RolePermisoController {

  private readonly _rolepermisoService: IRolePermisoService;

  constructor(@inject("IRolePermisoService") service: IRolePermisoService) {
    this._rolepermisoService = service;
  }

  getAll= async (req: Request, res: Response)=> {
    const page = Number(req.query.page) || 1;
    const pageSize = Number(req.query.pageSize) || 100;
    const result = await this._rolepermisoService.findAll(page, pageSize);
    res.json(result);
  }

  create= async (req: Request, res: Response)=> {
    const result = await this._rolepermisoService.create(req.body);
    res.status(201).json(result);
  }

  getById= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._rolepermisoService.findById(id);
    res.json(result);
  }

  update= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    const result = await this._rolepermisoService.update(id, req.body);
    res.json(result);
  }

  delete= async (req: Request, res: Response)=> {
    const id = req.params.id as string;
    await this._rolepermisoService.delete(id);
    res.status(204).send();
  }
}
