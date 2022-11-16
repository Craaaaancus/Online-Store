import './FilterCategory.scss'
import './images/Brand/Marvel_Logo.svg.png'
import './images/Brand/Pokemon.svg'
import './images/Brand/tmnt.png'
import './images/Brand/transformers_logo.gif'
import './images/Company/bandai.png'
import './images/Company/funko.png'
import './images/Company/hasbro.png'
import './images/Company/medicom.png'

export class FilterCategory extends HTMLElement {
  connectedCallback(){
    const filterType: string | null = this.getAttribute('type')
    if (!filterType) return
    switch(filterType){
      case 'color':
        this.innerHTML = this.getColorHTML()
        break
      case 'company':
        this.innerHTML = this.getCompanyHTML()
        break
      case 'brand':
        this.innerHTML = this.getBrandHTML()
        break
      default:
        return
    }
    
    this.onclick = this.handleClick
  }

  private getColorHTML() {
    return `
      <h3 class="category-header">Color</h3>
      <div class="category-content colors">
        <div class="category-item color red"></div>
        <div class="category-item color green"></div>
        <div class="category-item color grey"></div>
        <div class="category-item color black"></div>
        <div class="category-item color purple"></div>
        <div class="category-item color yellow"></div>
        <div class="category-item color blue"></div>
        <div class="category-item color white"></div>
        <div class="category-item color pink"></div>
        <div class="category-item color orange"></div>
      </div>
    `
  }

  private getBrandHTML() {
    return `
      <h3 class="category-header">Brand</h3>
      <div class="category-content brands">
        <div class="category-item brand marvel"></div>
        <div class="category-item brand pokemon"></div>
        <div class="category-item brand tmnt"></div>
        <div class="category-item brand transformers"></div>
      </div>
    `
  }

  private getCompanyHTML() {
    return `
      <h3 class="category-header">Company</h3>
      <div class="category-content companies">
        <div class="category-item company bandai"></div>
        <div class="category-item company funko"></div>
        <div class="category-item company hasbro"></div>
        <div class="category-item company medicom"></div>
      </div>
    `
  }

  private handleClick(event: MouseEvent) {
    const target: HTMLElement = event.target as HTMLElement
    const item: HTMLElement | null = target.closest('.category-item')
    if (item && this.contains(item)) {
      item.classList.toggle('active')
    }
  }
}
