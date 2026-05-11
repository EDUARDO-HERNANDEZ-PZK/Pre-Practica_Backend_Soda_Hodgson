import Cash_Sessions from "../../Domain/entities/cash_sessions";
import { Cash_SessionsDto } from './../dtos/cash_sessions.dto';

export interface ICash_SessionsService {
  findAll(page: number, pageSize: number): Promise<Cash_Sessions[]>;
  findById(id: string): Promise<Cash_Sessions | null>;
  create(data: Cash_SessionsDto): Promise<Cash_Sessions>;
  update(id: string, data: Cash_SessionsDto): Promise<Cash_Sessions | null>;
  delete(id: string): Promise<void>;
}
