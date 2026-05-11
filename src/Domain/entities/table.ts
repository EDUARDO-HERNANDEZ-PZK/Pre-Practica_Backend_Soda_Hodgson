import BaseModel from "./base.model";

export default class Table extends BaseModel {
  table_number: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    table_number,
    status,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    table_number: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.table_number = table_number;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
