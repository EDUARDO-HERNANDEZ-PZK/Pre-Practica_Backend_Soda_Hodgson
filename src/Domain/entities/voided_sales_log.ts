import BaseModel from "./base.model";

export default class Voided_sales_log extends BaseModel {
  sale_id: string;
  reason: string;
  voided_time: Date;
  user_voided: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    sale_id,
    reason,
    voided_time,
    user_voided,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    sale_id: string;
    reason: string;
    voided_time: Date;
    user_voided: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.sale_id = sale_id;
    this.reason = reason;
    this.voided_time = voided_time;
    this.user_voided = user_voided;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
