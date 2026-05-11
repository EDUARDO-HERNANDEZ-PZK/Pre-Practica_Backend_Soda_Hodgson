import Sales from "../../Domain/entities/sales";
import { SalesDto } from './../dtos/sales.dto';

export interface ISalesService {
  findAll(page: number, pageSize: number): Promise<Sales[]>;
  findById(id: string): Promise<Sales | null>;
  create(data: SalesDto): Promise<Sales>;
  update(id: string, data: SalesDto): Promise<Sales | null>;
  delete(id: string): Promise<void>;
}
