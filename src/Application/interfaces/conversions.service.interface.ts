import Conversions from "../../Domain/entities/conversions";
import { ConversionsDto } from './../dtos/conversions.dto';

export interface IConversionsService {
  findAll(page: number, pageSize: number): Promise<Conversions[]>;
  findById(id: string): Promise<Conversions | null>;
  create(data: ConversionsDto): Promise<Conversions>;
  update(id: string, data: ConversionsDto): Promise<Conversions | null>;
  delete(id: string): Promise<void>;
}
