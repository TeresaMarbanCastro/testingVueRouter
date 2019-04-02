import { LitElement, html } from "lit-element";

class ListView extends LitElement {
  static get is() { return 'list-view'}
  static get properties() {
    return {

    };
  }

  render() {
    return html`
      <h1>List</h1>
    `;
  }
}

customElements.define(ListView.is, ListView);