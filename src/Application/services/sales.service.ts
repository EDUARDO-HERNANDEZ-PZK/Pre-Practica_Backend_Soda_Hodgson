import { inject, injectable } from "tsyringe";
import { ISalesService } from "../interfaces/sales.service.interface";
import { ISalesRepository } from "../../Domain/repositories/salesRepository.interface";
import { SalesDto } from "../dtos/sales.dto";
import Sales from "../../Domain/entities/sales";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class SalesService implements ISalesService {
  private readonly _salesRepository: ISalesRepository;

  constructor(@inject("ISalesRepository") repository: ISalesRepository) {
    this._salesRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Sales[]> {
    return await this._salesRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Sales | null> {
    return await this._salesRepository.findById(id);
  }
  
  async create(data: SalesDto): Promise<Sales> {
    const now = new Date();
    const newData: Sales = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._salesRepository.create(newData);
    return newData;
  }

  async update(id: string, data: SalesDto): Promise<Sales | null> {
    const existing = await this._salesRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Sales = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._salesRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._salesRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._salesRepository.delete(existing);
  }
}
