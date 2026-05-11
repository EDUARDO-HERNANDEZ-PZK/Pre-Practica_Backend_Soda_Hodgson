import BaseModel from "./base.model";

export default class User extends BaseModel {
  role_id: string;
  username: string;
  password_hash: string;
  create_at: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    role_id,
    username,
    password_hash,
    create_at,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    role_id: string;
    username: string;
    password_hash: string;
    create_at: Date;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.role_id = role_id;
    this.username = username;
    this.password_hash = password_hash;
    this.create_at = create_at;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
