import { Controller } from "../controller/Controller";
import { FilterContainer, ProductContainer, StoreFooter, StoreHeaderLine } from "../customElements";
import { IDataProduct, IDataProductList } from "../interfaces";
import { AppView } from "../view/AppView";

export class App {
  private controller: Controller = new Controller()
  private view: AppView = new AppView()

  start(){
    customElements.define('store-header-line', StoreHeaderLine)
    customElements.define('filter-container', FilterContainer)
    customElements.define('product-container', ProductContainer)
    customElements.define('store-footer', StoreFooter)

    const storeHeaderLine: HTMLElement = document.createElement('store-header-line')
    const filterContainer: HTMLElement = document.createElement('filter-container')
    const productContainer: HTMLElement = document.createElement('product-container')
    const storeFooter: HTMLElement = document.createElement('store-footer')

    const mainElement: HTMLElement = document.createElement('main')
    mainElement.className = 'main'
    mainElement.append(filterContainer)
    mainElement.append(productContainer)
    
    const app: HTMLElement | null = document.getElementById('app')

    if (app) {
      app.append(storeHeaderLine)
      app.append(mainElement)
      app.append(storeFooter)
    }

    this.controller.getProducts((data: IDataProductList): void =>
      this.view.drawProducts(data)
    )
  }
}
