import { inject, injectable } from "tsyringe";
import { ISales_detailsService } from "../interfaces/sales_details.service.interface";
import { ISales_detailsRepository } from "../../Domain/repositories/sales_detailsRepository.interface";
import { Sales_detailsDto } from "../dtos/sales_details.dto";
import Sales_details from "../../Domain/entities/sales_details";
import { generateId } from "../../shared/utils/generateId";
import { IProductsRepository } from "../../Domain/repositories/productsRepository.interface";

@injectable()
export class Sales_detailsService implements ISales_detailsService {
  private readonly _sales_detailsRepository: ISales_detailsRepository;
  private readonly _productsRepository: IProductsRepository;

  constructor(
    @inject("ISales_detailsRepository") repository: ISales_detailsRepository,
    @inject("IProductsRepository") productsRepository: IProductsRepository,
  ) {
    this._sales_detailsRepository = repository;
    this._productsRepository = productsRepository;
  }

  async findAll(
    page: number = 1,
    pageSize: number = 100,
  ): Promise<Sales_details[]> {
    return await this._sales_detailsRepository.findAll(page, pageSize);
  }

  async findById(id: string): Promise<Sales_details | null> {
    return await this._sales_detailsRepository.findById(id);
  }

  async create(data: Sales_detailsDto): Promise<Sales_details> {
    // Buscamos existe el producto que vamos a vender
    const product = await this._productsRepository.findById(data.product_id);

    //error si el producto que vamos a vernder no existe
    if (!product) {
      throw new Error("Producto no encontrado");
    }

    // Validar stock para no vender si no tenermos la cantidad suficiente
    if (product.stock_current < data.quantity) {
      throw new Error(
        `Stock insuficiente para ${product.name}. Disponible: ${product.stock_current}`,
      );
    }

    // Reducir stock
    product.stock_current -= data.quantity; //restamos la cantidad que se va vender
    product.updatedAt = new Date(); //tomamos fecha de la actualizacion
    product.updatedBy = "system"; //le decimos que se actualizo por el sistema

    await this._productsRepository.update(product);

    const now = new Date();
    const newData: Sales_details = {
      ...data,
      id: generateId(),
      createdAt: now,
      updatedAt: now,
      createdBy: "system",
      updatedBy: "system",
    };
    await this._sales_detailsRepository.create(newData);
    return newData;
  }

  async update(
    id: string,
    data: Sales_detailsDto,
  ): Promise<Sales_details | null> {
    const existing = await this._sales_detailsRepository.findById(id);
    if (!existing) {
      return null;
    }

    const now = new Date();
    const newData: Sales_details = {
      ...data,
      id,
      createdAt: existing.createdAt,
      updatedAt: now,
      createdBy: existing.createdBy,
      updatedBy: "system",
    };
    await this._sales_detailsRepository.update(newData);
    return newData;
  }

  async delete(id: string): Promise<void> {
    const existing = await this._sales_detailsRepository.findById(id);

    if (!existing) {
      return;
    }

    const product = await this._productsRepository.findById(existing.product_id);
    
    // Restaurar stock al eliminar detalle de la factura
    //por ejemplo cuando se agrega un producto por error y lo borras la fila del registro
    if (product) {
      product.stock_current += existing.quantity;
      product.updatedAt = new Date();
      product.updatedBy = "system";

      await this._productsRepository.update(product);
    }

    return await this._sales_detailsRepository.delete(existing);
  }
}
