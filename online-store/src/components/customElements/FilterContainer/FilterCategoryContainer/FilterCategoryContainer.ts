import './FilterCategoryContainer.scss'
import { FilterCategory } from './FilterCategory'
import { RangeSlider } from './RangeSlider'
import { FilterCheckbox } from './FilterCheckbox'

export class FilterCategoryContainer extends HTMLElement {
  constructor(){
    super()
    customElements.define('range-slider', RangeSlider)
    customElements.define('filter-category', FilterCategory)
    customElements.define('filter-checkbox', FilterCheckbox)
  }

  connectedCallback(){
    const minSliderValue = 0
    const maxSliderValue = 100
    const firstValue = 1
    const secondValue = 33

    this.innerHTML = `
      <filter-category type="color"></filter-category>
      <filter-category type="brand"></filter-category>
      <filter-category type="company"></filter-category>
      <div class="slider-block">
        <h3>Amount</h3>
        <range-slider
          min=${minSliderValue}
          max=${maxSliderValue}
          firstValue=${firstValue}
          secondValue=${secondValue}
        ></range-slider>
      </div>
      <div class="slider-block">
        <h3>Year of release</h3>
        <range-slider
          min=${minSliderValue}
          max=${maxSliderValue}
          firstValue=${firstValue}
          secondValue=${secondValue}
        ></range-slider>
      </div>
      <filter-checkbox></filter-checkbox>
    `
  }
}
