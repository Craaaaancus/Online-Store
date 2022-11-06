import { ApplyButton } from './ApplyButton'
import { FilterCategoryContainer } from './FilterCategoryContainer'
import { ResetButton } from './ResetButton'
import './FilterContainer.scss'

export class FilterContainer extends HTMLElement {
  constructor() {
    super()
    customElements.define('filter-category-container', FilterCategoryContainer)
    customElements.define('apply-button', ApplyButton, {extends: 'button'})
    customElements.define('reset-button', ResetButton, {extends: 'button'})
  }
  connectedCallback(){
    this.innerHTML = `
      <h2>Filters</h2>
      <filter-category-container></filter-category-container>
      <button is="apply-button">Apply Filters</button>
      <button is="reset-button">Reset Filters</button>
    `
  }
}
