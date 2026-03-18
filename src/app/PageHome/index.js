import { LitElement, html } from "lit";

// Import services API
import { GetData } from "../../services/get-data";

// Import Components
import { HeaderHome } from "../../components/Header";
import { CardPerson } from "../../components/CardsPerson";
import { FooterHome } from "../../components/Footer/footer-home.js";

// Import styles
import { PageStyles } from "./page-home.css";

export class PageHome extends LitElement {
  static get is() {
    return "page-home";
  }

  constructor() {
    super();
    this.characters = [];
    this.idFavs = [];
    this.viewFavs = false;
    this.searchQuery = "";
    this.info = {};
    this.currentPage = 1;
  }

  static get styles() {
    return PageStyles;
  }

  static get properties() {
    return {
      characters: { type: Array },
      idFavs: { type: Array },
      viewFavs: { type: Boolean },
      searchQuery: { type: String },
      info: { type: Object },
      currentPage: { type: Number },
    };
  }

  firstUpdated() {
    this._fetchCharacters();
  }

  // fecthing to the data
  _fetchCharacters() {
    const getDataCharacters = this.shadowRoot.querySelector("get-data");
    getDataCharacters.getData(this.currentPage);
  }

  // method to conditional render cards
  getAllRenderCharacters() {
    let charactersToRender;
    if (this.viewFavs) {
      charactersToRender = this.characters.filter((character) =>
        this.idFavs.includes(character.id),
      );
    } else {
      charactersToRender = this.characters;
    }

    if (this.searchQuery) {
      charactersToRender = charactersToRender.filter((character) =>
        character.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
      );
    }

    return html`
      ${charactersToRender.map(
        (character) => html`
          <card-person
            .characterData="${character}"
            id="${character.id}"
            imgUrl="${character.image}"
            namePerson="${character.name}"
            ._isFav="${this.idFavs.includes(character.id)}"
            @toggle-fav="${this._updateFavs}"
          ></card-person>
        `,
      )}
    `;
  }

  // Private method to change view state
  _changeView() {
    this.viewFavs ? (this.viewFavs = false) : (this.viewFavs = true);
  }

  // Private method to save fav characters
  _updateFavs(event) {
    const { id } = event.detail;
    if (this.idFavs.includes(id)) {
      this.idFavs = this.idFavs.filter((favId) => favId !== id);
      console.log(this.idFavs);
    } else {
      this.idFavs = [...this.idFavs, id];
    }
  }

  _handleSearch(event) {
    this.searchQuery = event.detail;
  }

  _handleData(event) {
    this.characters = event.detail.results;
    this.info = event.detail.info;
  }

  // Private methods for handler navigation

  _handlePageClick(page) {
    if (page !== this.currentPage) {
      this.currentPage = page;
      this._fetchCharacters();
    }
  }

  _nextPage() {
    if (this.info.next) {
      this.currentPage++;
      this._fetchCharacters();
    }
  }

  _prevPage() {
    if (this.info.prev) {
      this.currentPage--;
      this._fetchCharacters();
    }
  }

  render() {
    return html`
      <header-home
        .changeView="${() => this._changeView()}"
        @search-input="${this._handleSearch}"
      ></header-home>

      <main>${this.getAllRenderCharacters()}</main>

      <get-data @succes-get-data="${this._handleData}"></get-data>
      
      <footer-home
        .currentPage="${this.currentPage}"
        .totalPages="${this.info.pages || 1}"
        .handlePrev="${() => this._prevPage()}"
        .handleNext="${() => this._nextPage()}"
        .handlePageClick="${(page) => this._handlePageClick(page)}"
      ></footer-home>
    `;
  }
}
customElements.define(PageHome.is, PageHome);
