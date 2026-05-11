import BaseModel from "./base.model";

export default class RolePermiso extends BaseModel {
  role_id: string;
  permission_id: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    role_id,
    permission_id,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    role_id: string;
    permission_id: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.role_id = role_id;
    this.permission_id = permission_id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
