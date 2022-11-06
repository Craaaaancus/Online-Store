import { Controller } from "../controller/Controller";
import { FilterContainer, StoreHeaderLine } from "../customElements";
import { IDataProduct, IDataProductList } from "../interfaces";
import { AppView } from "../view/AppView";

export class App {
  private controller: Controller = new Controller()
  private view: AppView = new AppView()

  start(){
    // this.controller.getProducts((data: IDataProductList): void =>
    //   this.view.drawProducts(data)
    // )
    
    customElements.define('store-header-line', StoreHeaderLine)
    customElements.define('filter-container', FilterContainer)

    const storeHeaderLine: HTMLElement = document.createElement('store-header-line')
    const filterContainer: HTMLElement = document.createElement('filter-container')
    const app: HTMLElement | null = document.getElementById('app')
    if (app) {
      app.append(storeHeaderLine)
      app.append(filterContainer)
    }
  }
}
