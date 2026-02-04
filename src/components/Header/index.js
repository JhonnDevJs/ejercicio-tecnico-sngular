import { LitElement, html } from "lit";
import { HeaderHomeStyles } from "./header-home.css";

export class HeaderHome extends LitElement {
	static get is() {
		return "header-home";
	}

	static properties = {
		changeView: {type: Function}
	}

	static styles = [HeaderHomeStyles];

	constructor() {
		super()
	}

	render() {
		return html`
			<header>
				<h1>Wubba lubba dub dub!</h1>
				<p>Base de datos de personajes de Rick y Morty</p>
				<div class="__btns">
					<div class="search-box">
						<button class="__btn-search">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 32 32"
								xml:space="preserve"
							>
								<path
									d="m27.414 24.586-5.077-5.077A9.93 9.93 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10a9.93 9.93 0 0 0 5.509-1.663l5.077 5.077a2 2 0 1 0 2.828-2.828M7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7"
									data-original="#000000"
								/>
							</svg>
						</button>
						<input class="__search-in" placeholder="Buscar" />
					</div>

					<button class="btn" @click="${this.changeView}">
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
					</button>
				</div>
			</header>
		`;
	}
}
customElements.define(HeaderHome.is, HeaderHome);
