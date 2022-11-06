import './FilterCategoryContainer.scss'
import { RangeSlider } from './RangeSlider'

export class FilterCategoryContainer extends HTMLElement {
  constructor(){
    super()
    customElements.define('range-slider', RangeSlider)
  }

  connectedCallback(){
    const minSliderValue = 0
    const maxSliderValue = 100
    const firstValue = 1
    const secondValue = 33
    this.innerHTML = `
      <range-slider 
        min=${minSliderValue}
        max=${maxSliderValue}
        firstValue=${firstValue}
        secondValue=${secondValue}
      ></range-slider>
    `
  }
}
