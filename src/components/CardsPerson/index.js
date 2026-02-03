import { LitElement, html } from "lit";
import { CardPersonStyles } from "./card-person.css";
import { ModalPerson } from "./ModalPerson";

export class CardPerson extends LitElement {
	static get is() {
		return "card-person";
	}

	static styles = [CardPersonStyles];

	static properties = {
		id: { type: Number },
		imgUrl: { type: String },
		namePerson: { type: String },
		characterData: { type: Object },
		_isAddFav: { type: Boolean },
		openModal: { type: Boolean },
	};

	constructor() {
		super();
		this.openModal = false;
	}

	willUpdate(changedProperties) {
		if (changedProperties.has("id")) {
			this._checkFav();
		}
	}
	render() {
		return html`
			<div @click="${this._openModal}" class="card" id="${this.id}">
				<img src="${this.imgUrl}" class="__image" />

				<footer class="__footer">
					<h2 class="__name-person">${this.namePerson}</h2>
					<button @click="${this._AddFav}" class="__btn-fav">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="12"
							height="12"
							viewBox="0 0 682.667 682.667"
							xml:space="preserve"
						>
							<defs>
								<clipPath id="a" clipPathUnits="userSpaceOnUse">
									<path
										d="M0 512h512V0H0Z"
										fill="#838a91"
										data-original="#000000"
									/>
								</clipPath>
							</defs>
							<g
								clip-path="url(#a)"
								transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
							>
								<path
									d="M0 0a32.24 32.24 0 0 0 28.908 17.964A32.23 32.23 0 0 0 57.815 0c17.521-35.5 38.539-78.093 49.508-100.32a32.26 32.26 0 0 1 24.274-17.641c24.532-3.562 71.54-10.388 110.708-16.086a32.22 32.22 0 0 0 26.022-21.937 32.22 32.22 0 0 0-8.156-33.042c-28.343-27.635-62.361-60.79-80.107-78.093a32.24 32.24 0 0 1-9.276-28.529c4.191-24.435 12.226-71.25 18.915-110.265a32.23 32.23 0 0 0-12.822-31.526 32.25 32.25 0 0 0-33.953-2.458c-35.033 18.422-77.077 40.521-99.022 52.062a32.26 32.26 0 0 1-29.996 0c-21.945-11.541-63.99-33.64-99.022-52.062a32.25 32.25 0 0 0-33.953 2.458 32.23 32.23 0 0 0-12.823 31.526c6.69 39.015 14.724 85.83 18.915 110.265a32.24 32.24 0 0 1-9.276 28.529c-17.746 17.303-51.763 50.458-80.107 78.093a32.22 32.22 0 0 0-8.156 33.042 32.23 32.23 0 0 0 26.023 21.937c39.167 5.698 86.176 12.524 110.708 16.086a32.26 32.26 0 0 1 24.274 17.641C-38.539-78.093-17.521-35.5 0 0"
									style="stroke-width:30;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
									transform="translate(227.092 468.817)"
									fill="${this._isAddFav ? "#2D68A2" : "none"}"
									stroke="#838a91"
									stroke-width="30"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-miterlimit="10"
									data-original="#000000"
								/>
							</g>
						</svg>
					</button>
				</footer>
			</div>

			<modal-person
				.imgUrl="${this.imgUrl}"
				.state="${this.characterData?.status}"
				.gen="${this.characterData?.gender}"
				.specie="${this.characterData?.species}"
				.origin="${this.characterData?.origin?.name}"
				.addres="${this.characterData?.location?.name}"
				.isOpenModal="${this.openModal}"
				@close-modal="${this._closeModal}"
			></modal-person>
		`;
	}

	_openModal() {
		this.openModal = true;
	}

	_closeModal() {
		this.openModal = false;
	}

	_checkFav() {
		const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
		this._isAddFav = favorites.some((fav) => fav.id == this.id);
	}

	_AddFav(e) {
		e.stopPropagation();
		const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
		if (this._isAddFav) {
			const newFavorites = favorites.filter((fav) => fav.id != this.id);
			localStorage.setItem("favorites", JSON.stringify(newFavorites));
			this._isAddFav = false;
		} else {
			if (!this.characterData) return;
			favorites.push(this.characterData);
			localStorage.setItem("favorites", JSON.stringify(favorites));
			this._isAddFav = true;
		}
	}
}
customElements.define(CardPerson.is, CardPerson);
