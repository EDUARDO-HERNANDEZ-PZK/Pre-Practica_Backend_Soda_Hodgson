import Sales_details from '../entities/sales_details';

export interface ISales_detailsRepository {
  findAll(page: number, pageSize: number): Promise<Sales_details[]>;
  findById(id: string): Promise<Sales_details | null>;
  create(data: Sales_details): Promise<void>;
  update(data: Sales_details): Promise<void>;
  delete(data: Sales_details): Promise<void>;
}
