import Measurement_units from "../../Domain/entities/measurement_units";
import { Measurement_unitsDto } from './../dtos/measurement_units.dto';

export interface IMeasurement_unitsService {
  findAll(page: number, pageSize: number): Promise<Measurement_units[]>;
  findById(id: string): Promise<Measurement_units | null>;
  create(data: Measurement_unitsDto): Promise<Measurement_units>;
  update(id: string, data: Measurement_unitsDto): Promise<Measurement_units | null>;
  delete(id: string): Promise<void>;
}
