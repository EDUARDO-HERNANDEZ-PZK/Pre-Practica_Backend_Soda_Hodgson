import { inject, injectable } from "tsyringe";
import { ISalesService } from "../interfaces/sales.service.interface";
import { ISalesRepository } from "../../Domain/repositories/salesRepository.interface";
import { SalesDto } from "../dtos/sales.dto";
import Sales from "../../Domain/entities/sales";
import { generateId } from "../../shared/utils/generateId";
import { ITableRepository } from "../../Domain/repositories/tableRepository.interface";

@injectable()
export class SalesService implements ISalesService {
  private readonly _salesRepository: ISalesRepository;
  private readonly _tableRepository: ITableRepository;

  constructor(
    @inject("ISalesRepository") repository: ISalesRepository,
    @inject("ITableRepository") tableRepository: ITableRepository
  ) {
    this._salesRepository = repository;
    this._tableRepository = tableRepository;
  }

  async findAll(page: number = 1, pageSize: number = 100): Promise<Sales[]> {
    return await this._salesRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Sales | null> {
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
    };

    await this._salesRepository.create(newData);

    // Cambiar estado de la mesa a Ocupada
    const table = await this._tableRepository.findById(data.table_id);

    if (table) {
      await this._tableRepository.update({
        ...table,
        status: "Ocupada",
        updatedAt: now,
      });
    }

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
    };

    await this._salesRepository.update(newData);

    return newData;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._salesRepository.findById(id);

    if (!existing) {
      return;
    }

    return await this._salesRepository.delete(existing);
  }
}