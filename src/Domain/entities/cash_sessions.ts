import BaseModel from "./base.model";

export default class Cash_Sessions extends BaseModel {
  user_id: string;
  open_time: Date;
  close_time: Date;
  opening_balance: number;
  closing_balance_real: number;
  expected_closing_balance: number;
  cash_difference: number;
  status: sting;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    user_id,
    open_time,
    close_time,
    opening_balance,
    closing_balance_real,
    expected_closing_balance,
    cash_difference,
    status,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    user_id: string;
    open_time: Date;
    close_time: Date;
    opening_balance: number;
    closing_balance_real: number;
    expected_closing_balance: number;
    cash_difference: number;
    status: sting;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.user_id = user_id;
    this.open_time = open_time;
    this.close_time = close_time;
    this.opening_balance = opening_balance;
    this.closing_balance_real = closing_balance_real;
    this.expected_closing_balance = expected_closing_balance;
    this.cash_difference = cash_difference;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
