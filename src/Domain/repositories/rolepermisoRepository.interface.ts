import RolePermiso from '../entities/rolepermiso';

export interface IRolePermisoRepository {
  findAll(page: number, pageSize: number): Promise<RolePermiso[]>;
  findById(id: string): Promise<RolePermiso | null>;
  create(data: RolePermiso): Promise<void>;
  update(data: RolePermiso): Promise<void>;
  delete(data: RolePermiso): Promise<void>;
}
