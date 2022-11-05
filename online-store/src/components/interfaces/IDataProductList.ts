import { IDataProduct } from "./IDataProduct";

export interface IDataProductList {
  status: string;
  totalResults: number;
  cards: Array<IDataProduct>;
}
