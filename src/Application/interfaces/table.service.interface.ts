import Table from "../../Domain/entities/table";
import { TableDto } from './../dtos/table.dto';

export interface ITableService {
  findAll(page: number, pageSize: number): Promise<Table[]>;
  findById(id: string): Promise<Table | null>;
  create(data: TableDto): Promise<Table>;
  update(id: string, data: TableDto): Promise<Table | null>;
  delete(id: string): Promise<void>;
}
