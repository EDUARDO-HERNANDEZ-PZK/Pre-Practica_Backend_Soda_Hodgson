import Measurement_units from '../entities/measurement_units';

export interface IMeasurement_unitsRepository {
  findAll(page: number, pageSize: number): Promise<Measurement_units[]>;
  findById(id: string): Promise<Measurement_units | null>;
  create(data: Measurement_units): Promise<void>;
  update(data: Measurement_units): Promise<void>;
  delete(data: Measurement_units): Promise<void>;
}
