import { inject, injectable } from "tsyringe";
import { ICash_SessionsService } from "../interfaces/cash_sessions.service.interface";
import { ICash_SessionsRepository } from "../../Domain/repositories/cash_sessionsRepository.interface";
import { Cash_SessionsDto } from "../dtos/cash_sessions.dto";
import Cash_Sessions from "../../Domain/entities/cash_sessions";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class Cash_SessionsService implements ICash_SessionsService {
  private readonly _cash_sessionsRepository: ICash_SessionsRepository;

  constructor(@inject("ICash_SessionsRepository") repository: ICash_SessionsRepository) {
    this._cash_sessionsRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Cash_Sessions[]> {
    return await this._cash_sessionsRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Cash_Sessions | null> {
    return await this._cash_sessionsRepository.findById(id);
  }
  
  async create(data: Cash_SessionsDto): Promise<Cash_Sessions> {
    const now = new Date();
    const newData: Cash_Sessions = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._cash_sessionsRepository.create(newData);
    return newData;
  }

  async update(id: string, data: Cash_SessionsDto): Promise<Cash_Sessions | null> {
    const existing = await this._cash_sessionsRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Cash_Sessions = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._cash_sessionsRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._cash_sessionsRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._cash_sessionsRepository.delete(existing);
  }
}
