import Daily_expense from '../entities/daily_expense';

export interface IDaily_expenseRepository {
  findAll(page: number, pageSize: number): Promise<Daily_expense[]>;
  findById(id: string): Promise<Daily_expense | null>;
  create(data: Daily_expense): Promise<void>;
  update(data: Daily_expense): Promise<void>;
  delete(data: Daily_expense): Promise<void>;
}
