import './RangeSlider.scss'

export class RangeSlider extends HTMLElement {
  private readonly minGap = 0

  connectedCallback(){
    this.innerHTML = `
    <div class="values">
        <span data-id="range1">
          ${this.getAttribute('firstValue')}
        </span>
        <span> - </span>
        <span data-id="range2">
          ${this.getAttribute('secondValue')}
        </span>
      </div>
    <div class="slider-container">
      <input
        type="range"
        data-id="slider1"
        min=${this.getAttribute('min')}
        max=${this.getAttribute('max')}
        value=${this.getAttribute('firstValue')}
      >
      <input
        type="range"
        data-id="slider2"
        min=${this.getAttribute('min')}
        max=${this.getAttribute('max')}
        value=${this.getAttribute('secondValue')}
      >
      <div data-id="sliderTrack" class="slider-track"></div>
    </div>
    `

    const sliderOne: HTMLInputElement | null = this.querySelector('[data-id="slider1"]')
    const sliderTwo: HTMLInputElement | null = this.querySelector('[data-id="slider2"]')
    const rangeValueOne: HTMLElement | null = this.querySelector('[data-id="range1"]')
    const rangeValueTwo: HTMLElement | null = this.querySelector('[data-id="range2"]')
    
   if (sliderOne && sliderTwo) {
    sliderOne.oninput = () => {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= this.minGap){
        sliderOne.value = `${parseInt(sliderTwo.value) - this.minGap}`
      }
      if (rangeValueOne) rangeValueOne.textContent = sliderOne.value
    }

    sliderTwo.oninput = () => {
      if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= this.minGap){
        sliderOne.value = `${parseInt(sliderTwo.value) + this.minGap}`
      }
      if (rangeValueTwo) rangeValueTwo.textContent = sliderTwo.value
    }
   }
  }
}
