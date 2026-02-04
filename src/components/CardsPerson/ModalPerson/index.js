import { LitElement, html } from "lit";
import { ModalPersonStyles } from "./modal-person.css";

export class ModalPerson extends LitElement {
	static get is() {
		return "modal-person";
	}

	static styles = [ModalPersonStyles];

	static properties = {
		imgUrl: { type: String },
		name: { type: String },
		state: { type: String },
		gen: { type: String },
		specie: { type: String },
		origin: { type: String },
		addres: { type: String },
		closeModal: { type: Function },
	};

	constructor() {
		super();
		this.imgUrl = "";
		this.name = "";
		this.state = "";
		this.gen = "";
		this.specie = "";
		this.origin = "";
		this.addres = "";
	}

	render() {
		return html`
			<section class="modal-container">
				<article class="__modal-card">
					<header>
						<button @click="${this.closeModal}" class="__btn-close">
							cerrar x
						</button>
					</header>
					<img src="${this.imgUrl}" class="__img" />
					<div class="__body">
						<p class="__name">${this.name}</p>
						<div class="__tags">
							<p class="__state __tag"><b>Estado:</b> ${this.state}</p>
							<p class="__gen __tag"><b>Género:</b> ${this.gen}</p>
							<p class="__specie __tag"><b>Especie:</b> ${this.specie}</p>
							<p class="__origin __tag"><b>Origen:</b> ${this.origin}</p>
							<p class="__addres __tag"><b>Ubicación:</b> ${this.addres}</p>
						</div>
					</div>
				</article>
			</section>
		`;
	}
}
customElements.define(ModalPerson.is, ModalPerson);
