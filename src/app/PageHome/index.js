import { LitElement, html } from "lit";

// Import services API
import { GetData } from "../../services/get-data";

// Import Components
import { HeaderHome } from "../../components/Header";
import { CardPerson } from "../../components/CardsPerson";

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
  }

  static get styles() {
    return PageStyles;
  }

  static get properties() {
    return {
      characters: { type: Array },
      idFavs: { type: Array },
    };
  }

  firstUpdated() {
    const getDataCaharacters = this.shadowRoot.querySelector("get-data");
    getDataCaharacters.getData();
  }

  get renderCharacters() {
    return html`
      ${this.characters.map(
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

  _changeView() {
    this.viewFavs ? (this.viewFavs = false) : (this.viewFavs = true);
  }

  _updateFavs(event) {
    const { id } = event.detail;
    if (this.idFavs.includes(id)) {
      this.idFavs = this.idFavs.filter((favId) => favId !== id);
    } else {
      this.idFavs = [...this.idFavs, id];
    }
  }

  render() {
    return html`
      <header-home .changeView="${() => this._changeView()}"></header-home>
      <main>${this.renderCharacters}</main>
      <get-data
        @succes-get-data="${(event) => (this.characters = event.detail)}"
      ></get-data>
      <footer>
        <span>${new Date().getFullYear()} - by Jhonatan Espinal</span>
      </footer>
    `;
  }
}
customElements.define(PageHome.is, PageHome);
