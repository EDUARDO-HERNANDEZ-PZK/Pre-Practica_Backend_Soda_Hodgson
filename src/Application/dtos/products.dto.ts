export interface ProductsDto {
  category_id: string;
  unit_id: string;
  name: string;
  description: string;
  price_sell: number;
  stock_current: number;
  stock_expired: number;
  stock_damaged: number;
  stock_min: number;
}