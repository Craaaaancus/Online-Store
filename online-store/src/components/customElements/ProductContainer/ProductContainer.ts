import { DropdownSelect } from './DropdownSelect'
import { ProductCard } from './ProductCard'
import { ResetAllButton } from './ResetAllButton'
import './ProductContainer.scss'

export class ProductContainer extends HTMLElement {
  constructor() {
    super()
    customElements.define('dropdown-select', DropdownSelect)
    customElements.define('product-card', ProductCard)
    customElements.define('reset-all-button', ResetAllButton)
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="product-settings">
        <div class="sort-settings">
          <h3 class="sort-heading">Sort by</h3>
          <dropdown-select></dropdown-select>
        </div>
        <button is="reset-all-button">Reset settings</button>
      </div>
    `

    const cardsContainer: HTMLDivElement = document.createElement('div')
    cardsContainer.className = 'cards'
    cardsContainer.id = 'cards'
    this.append(cardsContainer)
  }
}
