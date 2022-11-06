import './FilterCategoryContainer.scss'

export class FilterCategoryContainer extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <input type="range" is="range-slider">
    `
  }
}
