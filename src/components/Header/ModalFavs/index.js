import { LitElement, html } from "lit";
import { ModalFavsStyles } from "./modal-favs.css";

export class ModalFavs extends LitElement {
	static get is() {
		return "modal-favs";
	}

  static styles = [ModalFavsStyles]

	render() {
		return html`
			<a href="/favoritos" class="btn">
				<span class="__text-btn">Mis favoritos</span>
				<span class="__icon">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 682.667 682.667"
						xml:space="preserve"
					>
						<defs>
							<clipPath id="a" clipPathUnits="userSpaceOnUse">
								<path
									d="M0 512h512V0H0Z"
									fill="#fff"
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
								fill="none"
								stroke="#fff"
								stroke-width="30"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-miterlimit="10"
								data-original="#000000"
							/>
						</g>
					</svg>
				</span>
			</a>
		`;
	}
}
customElements.define(ModalFavs.is, ModalFavs);
