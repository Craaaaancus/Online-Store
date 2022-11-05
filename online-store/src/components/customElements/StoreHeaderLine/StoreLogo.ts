import './StoreLogo.scss'
import '../../../assets/images/balloon.png'

export class StoreLogo extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
      <div class="store-header">
        <div class="logo"></div><h1>NLINE-STORE</h1>
      </div>
    `
  }
}
