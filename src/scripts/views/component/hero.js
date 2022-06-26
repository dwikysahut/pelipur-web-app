/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      .hero {
  display: flex;
  width: 100%;
  align-items: center;
  background-position: initial;
  margin-bottom: 70px;
  height: 600px;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('./images/hero-img-crop-large.jpg');
}



@media screen and (max-width: 650px) {
  .hero {
    background-image: url('./images/hero-img-small.jpg');
  }
}
    </style>

      <div class="hero">
        <div class="hero__inner">
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
