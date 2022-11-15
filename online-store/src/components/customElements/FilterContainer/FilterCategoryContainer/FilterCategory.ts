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
    }
    
  }

  private getColorHTML() {
    return `
      <h3 class="category-header">Color</h3>
      <div class="category-content colors">
        <div class="color red"></div>
        <div class="color green"></div>
        <div class="color grey"></div>
        <div class="color black"></div>
        <div class="color purple"></div>
        <div class="color yellow"></div>
        <div class="color blue"></div>
        <div class="color white"></div>
        <div class="color pink"></div>
        <div class="color orange"></div>
      </div>
    `
  }

  private getBrandHTML() {
    return `
      <h3 class="category-header">Brand</h3>
      <div class="category-content brands">
        <div class="brand marvel"></div>
        <div class="brand pokemon"></div>
        <div class="brand tmnt"></div>
        <div class="brand transformers"></div>
      </div>
    `
  }

  private getCompanyHTML() {
    return `
      <h3 class="category-header">Company</h3>
      <div class="category-content companies">
        <div class="company bandai"></div>
        <div class="company funko"></div>
        <div class="company hasbro"></div>
        <div class="company medicom"></div>
      </div>
    `
  }
}
