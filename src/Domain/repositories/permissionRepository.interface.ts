import Permission from '../entities/permission';

export interface IPermissionRepository {
  findAll(page: number, pageSize: number): Promise<Permission[]>;
  findById(id: string): Promise<Permission | null>;
  create(data: Permission): Promise<void>;
  update(data: Permission): Promise<void>;
  delete(data: Permission): Promise<void>;
}
