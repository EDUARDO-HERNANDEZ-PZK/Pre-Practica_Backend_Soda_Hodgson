import { inject, injectable } from "tsyringe";
import { IConversionsService } from "../interfaces/conversions.service.interface";
import { IConversionsRepository } from "../../Domain/repositories/conversionsRepository.interface";
import { ConversionsDto } from "../dtos/conversions.dto";
import Conversions from "../../Domain/entities/conversions";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class ConversionsService implements IConversionsService {
  private readonly _conversionsRepository: IConversionsRepository;

  constructor(@inject("IConversionsRepository") repository: IConversionsRepository) {
    this._conversionsRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Conversions[]> {
    return await this._conversionsRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Conversions | null> {
    return await this._conversionsRepository.findById(id);
  }
  
  async create(data: ConversionsDto): Promise<Conversions> {
    const now = new Date();
    const newData: Conversions = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._conversionsRepository.create(newData);
    return newData;
  }

  async update(id: string, data: ConversionsDto): Promise<Conversions | null> {
    const existing = await this._conversionsRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Conversions = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._conversionsRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._conversionsRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._conversionsRepository.delete(existing);
  }
}
