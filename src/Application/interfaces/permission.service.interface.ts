import Permission from "../../Domain/entities/permission";
import { PermissionDto } from './../dtos/permission.dto';

export interface IPermissionService {
  findAll(page: number, pageSize: number): Promise<Permission[]>;
  findById(id: string): Promise<Permission | null>;
  create(data: PermissionDto): Promise<Permission>;
  update(id: string, data: PermissionDto): Promise<Permission | null>;
  delete(id: string): Promise<void>;
}
