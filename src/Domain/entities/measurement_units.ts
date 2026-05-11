import BaseModel from "./base.model";

export default class Measurement_units extends BaseModel {
  name: string;
  abbreviation: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  constructor({
    id,
    name,
    abbreviation,
    createdAt,
    updatedAt,
    createdBy,
    updatedBy,
  }: {
    id: string;
    name: string;
    abbreviation: string;
    createdAt: Date;
    updatedAt: Date;
    createdBy: string;
    updatedBy: string;
  }) {
    super(id);
    this.name = name;
    this.abbreviation = abbreviation;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }
}
