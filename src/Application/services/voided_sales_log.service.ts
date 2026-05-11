import { inject, injectable } from "tsyringe";
import { IVoided_sales_logService } from "../interfaces/voided_sales_log.service.interface";
import { IVoided_sales_logRepository } from "../../Domain/repositories/voided_sales_logRepository.interface";
import { Voided_sales_logDto } from "../dtos/voided_sales_log.dto";
import Voided_sales_log from "../../Domain/entities/voided_sales_log";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class Voided_sales_logService implements IVoided_sales_logService {
  private readonly _voided_sales_logRepository: IVoided_sales_logRepository;

  constructor(@inject("IVoided_sales_logRepository") repository: IVoided_sales_logRepository) {
    this._voided_sales_logRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Voided_sales_log[]> {
    return await this._voided_sales_logRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Voided_sales_log | null> {
    return await this._voided_sales_logRepository.findById(id);
  }
  
  async create(data: Voided_sales_logDto): Promise<Voided_sales_log> {
    const now = new Date();
    const newData: Voided_sales_log = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._voided_sales_logRepository.create(newData);
    return newData;
  }

  async update(id: string, data: Voided_sales_logDto): Promise<Voided_sales_log | null> {
    const existing = await this._voided_sales_logRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Voided_sales_log = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._voided_sales_logRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._voided_sales_logRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._voided_sales_logRepository.delete(existing);
  }
}
