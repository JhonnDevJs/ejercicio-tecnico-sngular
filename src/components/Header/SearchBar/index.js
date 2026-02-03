import { LitElement, html } from "lit";
import { SearchBarStyles } from "./search-bar.css";

export class SearchBar extends LitElement{
  static get is() {
    return 'search-bar'
  }

  static styles = [SearchBarStyles]

  render(){
    return html`
      <div class="search-box">
        <button class="__btn-search">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" xml:space="preserve"><path d="m27.414 24.586-5.077-5.077A9.93 9.93 0 0 0 24 14c0-5.514-4.486-10-10-10S4 8.486 4 14s4.486 10 10 10a9.93 9.93 0 0 0 5.509-1.663l5.077 5.077a2 2 0 1 0 2.828-2.828M7 14c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7" data-original="#000000"/></svg>
        </button>
        <input class="__search-in" placeholder="Buscar"/>
      </div>
    ` 
  }
}
customElements.define(SearchBar.is, SearchBar)