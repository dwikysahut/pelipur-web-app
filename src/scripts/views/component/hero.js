class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero"
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      >
        <div class="hero__inner">
          <div class="hero__inner__image">
          <img src="./images/heros/undraw_World_re_768g.png">
          </div>
          <div class="hero__inner__text">
          <h1 class="hero__title">Untuk <span class="hero__highlight">Bumi</span> <br> yang lebih <span class="hero__highlight">sehat</span></h1>
          ${localStorage.getItem('token') ? '<div></div>' : ' <button onClick="window.location=\'#/auth\';" class="hero__join">Daftar sekarang</button>'}
          </div>
        </div>
      </div>
          `;
  }
}
customElements.define('custom-hero', Hero);
