import BaseModel from "./base.model";

export default class Sales extends BaseModel {
  session_id: string;
  table_id: string;
  user_creator_id: string;
  ruc_number: string;
  sale_time: Date;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    session_id,
    table_id,
    user_creator_id,
    ruc_number,
    sale_time,
    status,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    session_id: string;
    table_id: string;
    user_creator_id: string;
    ruc_number: string;
    sale_time: Date;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.session_id = session_id;
    this.table_id = table_id;
    this.user_creator_id = user_creator_id;
    this.ruc_number = ruc_number;
    this.sale_time = sale_time;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
