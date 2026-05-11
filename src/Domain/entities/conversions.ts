import BaseModel from "./base.model";

export default class Conversions extends BaseModel {
  from_uni_id: string;
  to_unit_id: string;
  conversion_factor: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    from_uni_id,
    to_unit_id,
    conversion_factor,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    from_uni_id: string;
    to_unit_id: string;
    conversion_factor: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.from_uni_id = from_uni_id;
    this.to_unit_id = to_unit_id;
    this.conversion_factor = conversion_factor;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
