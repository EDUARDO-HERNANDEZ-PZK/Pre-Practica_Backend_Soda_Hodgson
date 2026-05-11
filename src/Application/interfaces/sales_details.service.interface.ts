import Sales_details from "../../Domain/entities/sales_details";
import { Sales_detailsDto } from './../dtos/sales_details.dto';

export interface ISales_detailsService {
  findAll(page: number, pageSize: number): Promise<Sales_details[]>;
  findById(id: string): Promise<Sales_details | null>;
  create(data: Sales_detailsDto): Promise<Sales_details>;
  update(id: string, data: Sales_detailsDto): Promise<Sales_details | null>;
  delete(id: string): Promise<void>;
}
