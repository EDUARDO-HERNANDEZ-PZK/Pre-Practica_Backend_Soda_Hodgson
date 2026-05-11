import Conversions from '../entities/conversions';

export interface IConversionsRepository {
  findAll(page: number, pageSize: number): Promise<Conversions[]>;
  findById(id: string): Promise<Conversions | null>;
  create(data: Conversions): Promise<void>;
  update(data: Conversions): Promise<void>;
  delete(data: Conversions): Promise<void>;
}
