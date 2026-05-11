import { inject, injectable } from "tsyringe";
import { IPermissionService } from "../interfaces/permission.service.interface";
import { IPermissionRepository } from "../../Domain/repositories/permissionRepository.interface";
import { PermissionDto } from "../dtos/permission.dto";
import Permission from "../../Domain/entities/permission";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class PermissionService implements IPermissionService {
  private readonly _permissionRepository: IPermissionRepository;

  constructor(@inject("IPermissionRepository") repository: IPermissionRepository) {
    this._permissionRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Permission[]> {
    return await this._permissionRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Permission | null> {
    return await this._permissionRepository.findById(id);
  }
  
  async create(data: PermissionDto): Promise<Permission> {
    const now = new Date();
    const newData: Permission = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._permissionRepository.create(newData);
    return newData;
  }

  async update(id: string, data: PermissionDto): Promise<Permission | null> {
    const existing = await this._permissionRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Permission = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._permissionRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._permissionRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._permissionRepository.delete(existing);
  }
}
