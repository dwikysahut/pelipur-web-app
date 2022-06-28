/* eslint-disable linebreak-style */
class PreLoader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="dots"></div>
            `;
  }
}

customElements.define('pre-loader', PreLoader);
