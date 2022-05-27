class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
      <div class="hero__inner">
        <h1 class="hero__title">Untuk Bumi Yang Lebih Sehat</h1>
        <p class="hero__tagline">Jadilah Penyelamat Bumi Kita Untuk Generasi Yang Akan Datang</p>
      </div>
      </div>
          `;
  }
}
customElements.define('custom-hero', Hero);
