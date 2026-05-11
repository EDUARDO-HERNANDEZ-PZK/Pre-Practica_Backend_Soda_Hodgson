import { inject, injectable } from "tsyringe";
import { IMeasurement_unitsService } from "../interfaces/measurement_units.service.interface";
import { IMeasurement_unitsRepository } from "../../Domain/repositories/measurement_unitsRepository.interface";
import { Measurement_unitsDto } from "../dtos/measurement_units.dto";
import Measurement_units from "../../Domain/entities/measurement_units";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class Measurement_unitsService implements IMeasurement_unitsService {
  private readonly _measurement_unitsRepository: IMeasurement_unitsRepository;

  constructor(@inject("IMeasurement_unitsRepository") repository: IMeasurement_unitsRepository) {
    this._measurement_unitsRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Measurement_units[]> {
    return await this._measurement_unitsRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Measurement_units | null> {
    return await this._measurement_unitsRepository.findById(id);
  }
  
  async create(data: Measurement_unitsDto): Promise<Measurement_units> {
    const now = new Date();
    const newData: Measurement_units = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._measurement_unitsRepository.create(newData);
    return newData;
  }

  async update(id: string, data: Measurement_unitsDto): Promise<Measurement_units | null> {
    const existing = await this._measurement_unitsRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Measurement_units = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._measurement_unitsRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._measurement_unitsRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._measurement_unitsRepository.delete(existing);
  }
}
