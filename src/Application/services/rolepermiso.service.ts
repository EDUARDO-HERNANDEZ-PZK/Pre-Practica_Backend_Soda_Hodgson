import { inject, injectable } from "tsyringe";
import { IRolePermisoService } from "../interfaces/rolepermiso.service.interface";
import { IRolePermisoRepository } from "../../Domain/repositories/rolepermisoRepository.interface";
import { RolePermisoDto } from "../dtos/rolepermiso.dto";
import RolePermiso from "../../Domain/entities/rolepermiso";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class RolePermisoService implements IRolePermisoService {
  private readonly _rolepermisoRepository: IRolePermisoRepository;

  constructor(@inject("IRolePermisoRepository") repository: IRolePermisoRepository) {
    this._rolepermisoRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<RolePermiso[]> {
    return await this._rolepermisoRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<RolePermiso | null> {
    return await this._rolepermisoRepository.findById(id);
  }
  
  async create(data: RolePermisoDto): Promise<RolePermiso> {
    const now = new Date();
    const newData: RolePermiso = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._rolepermisoRepository.create(newData);
    return newData;
  }

  async update(id: string, data: RolePermisoDto): Promise<RolePermiso | null> {
    const existing = await this._rolepermisoRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: RolePermiso = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._rolepermisoRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._rolepermisoRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._rolepermisoRepository.delete(existing);
  }
}
