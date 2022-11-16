import './FilterCheckbox.scss'

export class FilterCheckbox extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h4>Only popular: </h4>
      <div class="checkbox"></div>
    `
    this.onclick = this.handleClick
  }

  private handleClick(event: MouseEvent) {
    const target: HTMLElement = event.target as HTMLElement
    const checkbox: HTMLElement | null = target.closest('.checkbox')
    if (checkbox && this.contains(checkbox)) {
      this.classList.toggle('active')
    }
  }
}
