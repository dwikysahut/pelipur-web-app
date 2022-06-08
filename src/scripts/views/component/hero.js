class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Untuk <span class="hero__highlight">Bumi</span> <br> yang lebih <span class="hero__highlight">sehat</span></h1>
          ${localStorage.getItem('token') ? '<div></div>' : ' <button onClick="window.location=\'#/auth\';" class="hero__join">Bergabung sekarang</button>'}

        </div>
      </div>
          `;
  }
}
customElements.define('custom-hero', Hero);
