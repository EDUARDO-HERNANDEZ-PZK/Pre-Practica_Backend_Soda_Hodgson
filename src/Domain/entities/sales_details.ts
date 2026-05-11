import BaseModel from "./base.model";

export default class Sales_details extends BaseModel {
  sale_id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  subtotal: number;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    sale_id,
    product_id,
    quantity,
    unit_price,
    subtotal,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    sale_id: string;
    product_id: string;
    quantity: number;
    unit_price: number;
    subtotal: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.sale_id = sale_id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.unit_price = unit_price;
    this.subtotal = subtotal;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
