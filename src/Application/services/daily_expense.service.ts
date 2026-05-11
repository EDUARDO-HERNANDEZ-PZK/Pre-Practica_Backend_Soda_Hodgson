import { inject, injectable } from "tsyringe";
import { IDaily_expenseService } from "../interfaces/daily_expense.service.interface";
import { IDaily_expenseRepository } from "../../Domain/repositories/daily_expenseRepository.interface";
import { Daily_expenseDto } from "../dtos/daily_expense.dto";
import Daily_expense from "../../Domain/entities/daily_expense";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class Daily_expenseService implements IDaily_expenseService {
  private readonly _daily_expenseRepository: IDaily_expenseRepository;

  constructor(@inject("IDaily_expenseRepository") repository: IDaily_expenseRepository) {
    this._daily_expenseRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Daily_expense[]> {
    return await this._daily_expenseRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Daily_expense | null> {
    return await this._daily_expenseRepository.findById(id);
  }
  
  async create(data: Daily_expenseDto): Promise<Daily_expense> {
    const now = new Date();
    const newData: Daily_expense = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._daily_expenseRepository.create(newData);
    return newData;
  }

  async update(id: string, data: Daily_expenseDto): Promise<Daily_expense | null> {
    const existing = await this._daily_expenseRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Daily_expense = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._daily_expenseRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._daily_expenseRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._daily_expenseRepository.delete(existing);
  }
}
