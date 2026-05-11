import Table from '../entities/table';

export interface ITableRepository {
  findAll(page: number, pageSize: number): Promise<Table[]>;
  findById(id: string): Promise<Table | null>;
  create(data: Table): Promise<void>;
  update(data: Table): Promise<void>;
  delete(data: Table): Promise<void>;
}
