import BaseModel from "./base.model";

export default class Daily_expense extends BaseModel {
  session_id: string;
  description: string;
  amount: number;
  expense_time: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    session_id,
    description,
    amount,
    expense_time,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    session_id: string;
    description: string;
    amount: number;
    expense_time: Date;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.session_id = session_id;
    this.description = description;
    this.amount = amount;
    this.expense_time = expense_time;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
