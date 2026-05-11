import Cash_Sessions from '../entities/cash_sessions';

export interface ICash_SessionsRepository {
  findAll(page: number, pageSize: number): Promise<Cash_Sessions[]>;
  findById(id: string): Promise<Cash_Sessions | null>;
  create(data: Cash_Sessions): Promise<void>;
  update(data: Cash_Sessions): Promise<void>;
  delete(data: Cash_Sessions): Promise<void>;
}
