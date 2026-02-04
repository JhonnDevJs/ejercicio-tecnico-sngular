import { LitElement, html } from "lit";

// Import API
import { getData } from "../../api/getData";

// Import Components
import { HeaderHome } from "../../components/Header";
import { CardPerson } from "../../components/CardsPerson";

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
		viewFavs: { type: Boolean },
	};

	constructor() {
		super();
		this.data = { results: [] };
		this.idFavs = [];
		this.viewFavs = false;
	}

	connectedCallback() {
		super.connectedCallback();
		this._fecthData();
	}

	async _fecthData() {
		this.data = await getData();
	}

	render() {
		const filterData = this.data.results.filter((character) =>
			this.idFavs.includes(character.id),
		);
		
		return html`
			<header-home .changeView="${() => this._changeView()}"></header-home>

			${this.viewFavs
				? filterData.length > 0
					? html` <main>
							${filterData.map(
								(character) => html`
									<card-person
										.characterData="${character}"
										id="${character.id}"
										imgUrl="${character.image}"
										namePerson="${character.name}"
										._isFav="${true}"
										@toggle-fav="${this._updateFavs}"
									></card-person>
								`,
							)}
						</main>`
					: html`<p>Aún no has guadardo ningún favorito</p>`
				: html` <main>
						${this.data.results.map(
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
					</main>`}
			<footer>
				<span>${new Date().getFullYear()} - by Jhonatan Espinal</span>
			</footer>
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
}
customElements.define(PageHome.is, PageHome);
