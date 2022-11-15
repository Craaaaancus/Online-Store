import './ProductCard.scss'

export class ProductCard extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <h4 class="card-name">${this.getAttribute('name')}</h4>
      <div class="card-img-wrapper">
        <img class="card-img"
          src="${this.getAttribute('url')}"
          alt="${this.getAttribute('name')}"
        >
      </div>
      <ul class="card-props">
        <li class="card-brand">Brand: ${this.getAttribute('brand')}</li>
        <li class="card-amount">Amount: ${this.getAttribute('amount')}</li>
        <li class="card-year">Year: ${this.getAttribute('year')}</li>
        <li class="card-color">Color: ${this.getAttribute('color')}</li>
        <li class="card-company">Company: ${this.getAttribute('company')}</li>
        <li class="card-popular">Popular: ${this.getAttribute('popular')}</li>
      </ul>
      <div class="card-price">${this.getAttribute('cost')}</div>
    `
  }
}
