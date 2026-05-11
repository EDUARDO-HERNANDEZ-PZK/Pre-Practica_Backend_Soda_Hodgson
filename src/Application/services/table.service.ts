import { inject, injectable } from "tsyringe";
import { ITableService } from "../interfaces/table.service.interface";
import { ITableRepository } from "../../Domain/repositories/tableRepository.interface";
import { TableDto } from "../dtos/table.dto";
import Table from "../../Domain/entities/table";
import { generateId } from "../../shared/utils/generateId";

@injectable()
export class TableService implements ITableService {
  private readonly _tableRepository: ITableRepository;

  constructor(@inject("ITableRepository") repository: ITableRepository) {
    this._tableRepository = repository;
  }
  
  async findAll(page: number = 1, pageSize: number = 100): Promise<Table[]> {
    return await this._tableRepository.findAll(page, pageSize);
  }
  
  async findById(id: string) : Promise<Table | null> {
    return await this._tableRepository.findById(id);
  }
  
  async create(data: TableDto): Promise<Table> {
    const now = new Date();
    const newData: Table = {
      ...data,
      id: generateId(), 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._tableRepository.create(newData);
    return newData;
  }

  async update(id: string, data: TableDto): Promise<Table | null> {
    const existing = await this._tableRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Table = {
      ...data,
      id, 
      createdAt: now,
      updatedAt: now, 
      createdBy: "system", 
      updatedBy: "system", 
    }
    await this._tableRepository.update(newData);
    return newData;
  }

  async delete(id: string) : Promise<void> {
    const existing = await this._tableRepository.findById(id);
    if (!existing) {
      return ;
    }
    return await this._tableRepository.delete(existing);
  }
}
