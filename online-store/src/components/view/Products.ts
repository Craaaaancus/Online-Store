import { IDataProduct } from "../interfaces";

export class Products {
  draw(data: Array<IDataProduct>){
    const cardsContainer: HTMLElement | null = document.getElementById('cards')
    if (!cardsContainer) return
    data.forEach((item: IDataProduct): void => {
      const productCard: HTMLElement = document.createElement('product-card')
      productCard.id = item.id
      productCard.setAttribute('amount', `${item.amount}`)
      productCard.setAttribute('brand', `${item.brand}`)
      productCard.setAttribute('color', `${item.color}`)
      productCard.setAttribute('company', `${item.company}`)
      productCard.setAttribute('name', `${item.name}`)
      productCard.setAttribute('popular', `${item.popular}`)
      productCard.setAttribute('year', `${item.year}`)
      productCard.setAttribute('url', `${item.urlToImg}`)
      productCard.setAttribute('cost', `${item.cost}`)

      cardsContainer.append(productCard)
    })
  }
}
