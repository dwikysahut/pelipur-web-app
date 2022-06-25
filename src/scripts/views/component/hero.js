/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    picture{
      box-sizing:border-box;
    }
    </style>

      <div class="hero">
        <div class="hero__inner">
          <div class="hero__inner__image">
          <picture class="hero__inner__image">
            <source media ="(max-width:600px)" srcset="./images/heros/hero-img-crop-small.jpg" class="lazyload">
            <img data-src="./images/heros/hero-img-crop-small.jpg" class="lazyload"
            alt="hero"></img>
          </picture>
          </div>
          <div 
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            class="hero__inner__text">
            <h1 class="hero__title">Untuk <span class="hero__highlight">Bumi</span> <br> yang lebih <span class="hero__highlight">sehat</span></h1>
            ${localStorage.getItem('token') ? '<div></div>' : ' <button onClick="window.location=\'#/auth\';" class="hero__join">Daftar sekarang</button>'}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-hero', Hero);
