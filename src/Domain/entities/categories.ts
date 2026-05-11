import BaseModel from "./base.model";

export default class Categories extends BaseModel {
  name: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    name,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
