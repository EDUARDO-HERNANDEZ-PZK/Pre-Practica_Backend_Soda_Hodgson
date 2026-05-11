import RolePermiso from "../../Domain/entities/rolepermiso";
import { RolePermisoDto } from './../dtos/rolepermiso.dto';

export interface IRolePermisoService {
  findAll(page: number, pageSize: number): Promise<RolePermiso[]>;
  findById(id: string): Promise<RolePermiso | null>;
  create(data: RolePermisoDto): Promise<RolePermiso>;
  update(id: string, data: RolePermisoDto): Promise<RolePermiso | null>;
  delete(id: string): Promise<void>;
}
