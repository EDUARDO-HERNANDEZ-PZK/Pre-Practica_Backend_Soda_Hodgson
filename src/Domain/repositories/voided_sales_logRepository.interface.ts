import Voided_sales_log from '../entities/voided_sales_log';

export interface IVoided_sales_logRepository {
  findAll(page: number, pageSize: number): Promise<Voided_sales_log[]>;
  findById(id: string): Promise<Voided_sales_log | null>;
  create(data: Voided_sales_log): Promise<void>;
  update(data: Voided_sales_log): Promise<void>;
  delete(data: Voided_sales_log): Promise<void>;
}
