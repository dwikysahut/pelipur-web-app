/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { chatTemplateCreator, newsTemplate } from '../templates/template-creator';
import firebase from '../../utils/firebase-config';
import '../component/hero';
import '../component/artikelnews';
import '../component/layanan';
// const chat = [];
const Beranda = {
  async render() {
    return `
    <div class="wrapper">
    <custom-hero></custom-hero>
    <layanan-custom></layanan-custom>
    <div>
    <article>
    <div class="item-produk">
    </div></article>
  
     <artikel-custom 
     src="./images/heros/bumi.jpg"
     alt="gambar bumi">
     </artikel-custom>
      
      <div class="slider">
      <img src="./images/heros/biodisel.jpg" />
      <img src="./images/heros/ekonomis.jpg" />
      <img src="./images/heros/bumi1.jpg" />
    </div>
    <div class="carousel-item">
    <img src="..." alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>...</h5>
      <p>...</p>
    </div>
  </div>
    <keterangan-slider></keterangan-slider>
    </div>
    </div>

        `;
  },

  async afterRender() {
    document.querySelector('.item-produk').innerHTML = newsTemplate();
  },
};

export default Beranda;
