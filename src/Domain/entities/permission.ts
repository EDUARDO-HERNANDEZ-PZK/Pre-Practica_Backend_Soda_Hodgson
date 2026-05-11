import BaseModel from "./base.model";

export default class Permission extends BaseModel {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    name,
    description,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.name = name;
    this.description = description;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
