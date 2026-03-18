import { LitElement } from "lit";

export class GetData extends LitElement {
  static get is() {
    return "get-data";
  }

  async getData(page = 1) {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`,
      );
      const data = await response.json();
      this.dispatchEvent(
        new CustomEvent("succes-get-data", {
          detail: data,
          bubbles: true,
          composed: true,
        }),
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}
customElements.define(GetData.is, GetData);
