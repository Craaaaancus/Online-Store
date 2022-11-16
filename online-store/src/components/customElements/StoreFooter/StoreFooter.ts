import './StoreFooter.scss'
import '../images/rs_school_js.svg'

export class StoreFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="footer-container">
        <div class="footer-logo">
          <a href="https://rs.school/" target="_blank">
            <div class="logo-img" alt="RSSchool"></div>
          </a>
        </div>
        <p class="footer-github">
          Github: <a href="https://github.com/Craaaaancus?tab=repositories" target="_blank">Craaaaancus</a>
        </p>
        <p class="footer-copyright">
          <a href="https://rollingscopes.com/" target="_blank">
            Rolling Scopes School, 2022
          </a>
        </p>
      </div>
    `
  }
}
