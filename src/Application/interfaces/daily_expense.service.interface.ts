import Daily_expense from "../../Domain/entities/daily_expense";
import { Daily_expenseDto } from './../dtos/daily_expense.dto';

export interface IDaily_expenseService {
  findAll(page: number, pageSize: number): Promise<Daily_expense[]>;
  findById(id: string): Promise<Daily_expense | null>;
  create(data: Daily_expenseDto): Promise<Daily_expense>;
  update(id: string, data: Daily_expenseDto): Promise<Daily_expense | null>;
  delete(id: string): Promise<void>;
}
