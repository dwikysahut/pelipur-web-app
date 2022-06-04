class LoaderComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div id="loader" class="loader-container">
            <div class="loader"></div>
        </div>
    `;
  }
}

customElements.define('loader-content', LoaderComponent);
