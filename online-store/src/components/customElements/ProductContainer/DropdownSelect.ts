import './DropdownSelect.scss'

export class DropdownSelect extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="dropdown-button"></div>
      <div class="dropdown-selection">Name from A to Z</div>
      <ul class="dropdown-content">
        <li class="dropdown-item" data-sort="name" data-order="ascending">
          Name from A to Z
        </li>
        <li class="dropdown-item" data-sort="name" data-order="descending">
          Name from Z to A
        </li>
        <li class="dropdown-item" data-sort="year" data-order="ascending">
          Year in ascending order
        </li>
        <li class="dropdown-item" data-sort="year" data-order="descending">
          Year in descending order
        </li>
      </ul>
    `

    this.onclick = this.handleClick
  }

  private handleClick() {
    this.classList.toggle('open')
    if (this.classList.contains('open')) {
      window.onclick = (event: MouseEvent) => {
        const target: HTMLElement = event.target as HTMLElement
        if (!target.closest('.open')) {
          this.classList.remove('open')
          window.onclick = null
        }
      }
    }
  }
}
