import { LitElement, html } from "lit";
export class ModalPerson extends LitElement {
	static get is() {
		return "modal-person";
	}
	static properties = {
		imgUrl: { type: String },
		state: { type: String },
		gen: { type: String },
		specie: { type: String },
		origin: { type: String },
		addres: { type: String },
		isOpenModal: { type: Boolean },
	};

	constructor() {
		super();
		this.imgUrl = "";
		this.state = "";
		this.gen = "";
		this.specie = "";
		this.origin = "";
		this.addres = "";
		this.isOpenModal = false;
		this._closeModal;
	}

	render() {
		let active = this.isOpenModal ? `--active: block` : `--active: none`;

		return html`
			<section class="modal-container" style="${active}">
				<article class="__modal-card">
					<header>
						<button @click="${this._closeModal}">cerrar</button>
					</header>
					<img src="${this.imgUrl}" class="__img" />
					<div class="__body">
						<p class="__state">Estado: ${this.state}</p>
						<p class="__gen">Género: ${this.gen}</p>
						<p class="__specie">Especie: ${this.specie}</p>
						<p class="__origin">Origen: ${this.origin}</p>
						<p class="__addres">Ubicación: ${this.addres}</p>
					</div>
				</article>
			</section>
		`;
	}

	_closeModal() {
		this.isOpenModal = false;
		this.dispatchEvent(
			new CustomEvent("close-modal", { bubbles: true, composed: true }),
		);
	}
}
customElements.define(ModalPerson.is, ModalPerson);
