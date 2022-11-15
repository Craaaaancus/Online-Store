import { Controller } from "../controller/Controller";
import { FilterContainer, ProductContainer, StoreHeaderLine } from "../customElements";
import { IDataProduct, IDataProductList } from "../interfaces";
import { AppView } from "../view/AppView";

export class App {
  private controller: Controller = new Controller()
  private view: AppView = new AppView()

  start(){
    customElements.define('store-header-line', StoreHeaderLine)
    customElements.define('filter-container', FilterContainer)
    customElements.define('product-container', ProductContainer)

    const storeHeaderLine: HTMLElement = document.createElement('store-header-line')
    const filterContainer: HTMLElement = document.createElement('filter-container')
    const productContainer: HTMLElement = document.createElement('product-container')

    const mainElement: HTMLElement = document.createElement('main')
    mainElement.className = 'main'
    mainElement.append(filterContainer)
    mainElement.append(productContainer)
    const app: HTMLElement | null = document.getElementById('app')

    if (app) {
      app.append(storeHeaderLine)
      app.append(mainElement)
    }

    this.controller.getProducts((data: IDataProductList): void =>
      this.view.drawProducts(data)
    )
  }
}
