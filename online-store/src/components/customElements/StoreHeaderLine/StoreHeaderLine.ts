import './StoreHeaderLine.scss'
import { SearchButton } from './SearchButton'
import { SearchString } from './SearchString'
import { StoreLogo } from './StoreLogo'

export class StoreHeaderLine extends HTMLElement {
  constructor() {
    super()
    customElements.define('search-string', SearchString, { extends: 'input' })
    customElements.define('search-button', SearchButton, { extends: 'button' })
    customElements.define('store-logo', StoreLogo)
  }
  connectedCallback(){
    this.innerHTML = `
      <store-logo></store-logo>
      <div class="search-line">
        <input type="search" is="search-string">
        <button is="search-button">Find</button>
      </div>
    `
  }
}
