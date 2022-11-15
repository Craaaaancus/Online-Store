import { IDataProduct, IDataProductList } from "../interfaces";
import { Products } from "./Products";

export class AppView {
  private products: Products
  constructor() {
    this.products = new Products()
  }

  drawProducts(data: IDataProductList){
    const values: Array<IDataProduct> = data?.cards ?? [];
    this.products.draw(values)
  }
}