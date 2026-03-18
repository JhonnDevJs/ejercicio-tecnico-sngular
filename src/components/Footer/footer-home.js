import { LitElement, html } from "lit";
import { FooterHomeStyles } from "./footer-home.css.js";

export class FooterHome extends LitElement {
  static get is() {
    return "footer-home";
  }

  static get styles() {
    return FooterHomeStyles;
  }

  static get properties() {
    return {
      currentPage: { type: Number },
      totalPages: { type: Number },
    };
  }

  constructor() {
    super();
    this.currentPage = 1;
    this.totalPages = 1;
    this.handlePrev = () => {};
    this.handleNext = () => {};
    this.handlePageClick = () => {};
  }

  _renderPageNumbers() {
    const { currentPage, totalPages, handlePageClick } = this;

    if (totalPages <= 1) return "";

    const pageNumberButton = (page) => html`
      <button
        class="page-number ${page === currentPage ? "active" : ""}"
        @click="${() => handlePageClick(page)}"
      >
        ${page}
      </button>
    `;

    const dots = html`<span class="dots">...</span>`;

    // Case 1: Total pages less than or equal to 5, show all
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) =>
        pageNumberButton(i + 1),
      );
    }

    // Case 2: Current page is near the start
    if (currentPage <= 3) {
      return [
        pageNumberButton(1),
        pageNumberButton(2),
        dots,
        pageNumberButton(totalPages - 1),
        pageNumberButton(totalPages),
      ];
    }

    // Case 3: Current page is near the end
    if (currentPage >= totalPages - 2) {
      return [
        pageNumberButton(1),
        dots,
        pageNumberButton(totalPages - 2),
        pageNumberButton(totalPages - 1),
        pageNumberButton(totalPages),
      ];
    }

    // Case 4: Current page is in the middle
    return [
      pageNumberButton(1),
      dots,
      pageNumberButton(currentPage - 1),
      pageNumberButton(currentPage),
      pageNumberButton(currentPage + 1),
      dots,
      pageNumberButton(totalPages),
    ];
  }

  render() {
    const prevArrow = html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `;
    const nextArrow = html`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 6L15 12L9 18"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    `;
    return html`
      <footer>
        <div class="pagination">
          <button
            class="btn"
            @click="${this.handlePrev}"
            .disabled="${this.currentPage <= 1}"
          >
            ${prevArrow}
          </button>
          ${this._renderPageNumbers()}
          <button
            class="btn"
            @click="${this.handleNext}"
            .disabled="${this.currentPage >= this.totalPages}"
          >
            ${nextArrow}
          </button>
        </div>
      </footer>
    `;
  }
}
customElements.define(FooterHome.is, FooterHome);
