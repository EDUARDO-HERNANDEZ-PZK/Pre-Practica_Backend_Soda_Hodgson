import Voided_sales_log from "../../Domain/entities/voided_sales_log";
import { Voided_sales_logDto } from './../dtos/voided_sales_log.dto';

export interface IVoided_sales_logService {
  findAll(page: number, pageSize: number): Promise<Voided_sales_log[]>;
  findById(id: string): Promise<Voided_sales_log | null>;
  create(data: Voided_sales_logDto): Promise<Voided_sales_log>;
  update(id: string, data: Voided_sales_logDto): Promise<Voided_sales_log | null>;
  delete(id: string): Promise<void>;
}
