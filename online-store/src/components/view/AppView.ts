import { IDataProduct, IDataProductList } from "../interfaces";

export class AppView {
  constructor() {

  }

  drawProducts(data: IDataProductList){
    const products: Array<IDataProduct> = data?.cards ?? [];
    
  }
}