import { LitElement, html } from "lit";
import { SearchBar } from "./SearchBar";
import { ModalFavs } from "./ModalFavs";
import { HeaderHomeStyles } from "./header-home.css";

export class HeaderHome extends LitElement {
	static get is() {
		return "header-home";
	}

	static styles = [HeaderHomeStyles];

	render() {
		return html`
			<header>
				<h1>Wubba lubba dub dub!</h1>
				<p>Base de datos de personajes de Rick y Morty</p>
				<div class="__btns">
					<search-bar></search-bar>
					<modal-favs></modal-favs>
				</div>
			</header>
		`;
	}
}
customElements.define(HeaderHome.is, HeaderHome);
