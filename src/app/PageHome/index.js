import { LitElement, html } from "lit";

// Import API
import { getData } from "../../api/getData";

// Import Components
import { HeaderHome } from "../../components/Header";
import { CardPerson,  } from "../../components/CardsPerson";

// Import styles
import { PageStyles } from "./page-home.css";

export class PageHome extends LitElement {
	static get is() {
		return "page-home";
	}

	static styles = [PageStyles];

	static properties = {
		data: { type: Object },
		idFavs: { type: Array },
	};

	constructor() {
		super();
		this.data = { results: [] };
		this.idFavs = []
		getData();
	}

	connectedCallback() {
		super.connectedCallback();
		this._fecthData();
	}

	async _fecthData() {
		this.data = await getData();
	}

	render() {
		return html`
			<header-home></header-home>

			${this.viewFavs ? html`
			<main>
				${this.data.results.map(
					(character) => html`
						<card-person
							.characterData="${character}"
							id="${character.id}"
							imgUrl="${character.image}"
							namePerson="${character.name}"
						></card-person>
					`,
				)}
			</main>` : html`
			<main>
				${this.data.results.map(
					(character) => html`
						<card-person
							.characterData="${character}"
							id="${character.id}"
							imgUrl="${character.image}"
							namePerson="${character.name}"
						></card-person>
					`,
				)}
			</main>`}
			<footer>
				<span>${new Date().getFullYear()} - by Jhonatan Espinal</span>
			</footer>
		`;
	}

	_createNewData() {

	}
}
customElements.define(PageHome.is, PageHome);
