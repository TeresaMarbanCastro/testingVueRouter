import { LitElement, html } from "lit-element";

class DetailView extends LitElement {
  static get is() { return 'detail-view'}
  static get properties() {
    return {

    };
  }

  render() {
    return html`
      <h1>Detail</h1>
    `;
  }
}

customElements.define(DetailView.is, DetailView);