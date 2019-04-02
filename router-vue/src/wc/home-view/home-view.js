import { LitElement, html } from "lit-element";

class HomeView extends LitElement {
  static get is() { return 'home-view'}
  static get properties() {
    return {

    };
  }

  render() {
    return html`
      <h1>Home</h1>
    `;
  }
}

customElements.define(HomeView.is, HomeView);