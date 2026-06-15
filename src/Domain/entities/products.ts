import BaseModel from "./base.model";

export default class Products extends BaseModel {
  category_id: string;
  unit_id: string;
  name: string;
  description: string;
  price_sell: number;
  stock_current: number;
  stock_min: number;
  stock_expired: number;
  stock_damaged: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    category_id,
    unit_id,
    name,
    description,
    price_sell,
    stock_current,
    stock_min,
    stock_expired,
    stock_damaged,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    category_id: string;
    unit_id: string;
    name: string;
    description: string;
    price_sell: number;
    stock_current: number;
    stock_min: number;
    stock_expired: number;
    stock_damaged: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.category_id = category_id;
    this.unit_id = unit_id;
    this.name = name;
    this.description = description;
    this.price_sell = price_sell;
    this.stock_current = stock_current;
    this.stock_min = stock_min;
    this.stock_expired = stock_expired;
    this.stock_damaged = stock_damaged;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
