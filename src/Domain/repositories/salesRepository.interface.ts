import Sales from '../entities/sales';

export interface ISalesRepository {
  findAll(page: number, pageSize: number): Promise<Sales[]>;
  findById(id: string): Promise<Sales | null>;
  create(data: Sales): Promise<void>;
  update(data: Sales): Promise<void>;
  delete(data: Sales): Promise<void>;
}
