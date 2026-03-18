import { LitElement, nothing } from "lit";

export class GetData extends LitElement {
  static get is() {
    return "get-data";
  }

  constructor() {
    super();
    this.url = "https://rickandmortyapi.com/api/character";
  }

  static get properties() {
    return {
      url: { type: String },
    };
  }

  render() {
    return nothing;
  }

  async getData() {
    try {
      const response = await fetch(this.url);

      if (!response.ok) throw new Error("Error: ", response.status);

      const data = await response.json();

      const characters = data.results;

      this.dispatchEvent(
        new CustomEvent("succes-get-data", {
          bubbles: true,
          composed: true,
          detail: characters,
        }),
      );
    } catch (error) {
      console.error(error);
    }
  }
}
customElements.define(GetData.is, GetData);
