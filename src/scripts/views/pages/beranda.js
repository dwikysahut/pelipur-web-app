/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { chatTemplateCreator, newsTemplate } from '../templates/template-creator';
import firebase from '../../utils/firebase-config';
import '../component/hero';
import '../component/artikelnews';
import '../component/layanan';
import '../component/carousel';
import NewsDbSource from '../../data/newsdb-source';
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
        </div>
      </article>

      <artikel-custom src="./images/heros/bumi.jpg" alt="gambar bumi">
      </artikel-custom>


      <custom-carousel></custom-carousel>
      <keterangan-slider></keterangan-slider>
    </div>
  </div>


        `;
  },

  async afterRender() {
    try {
      const response = await NewsDbSource.getAllNews();

      const dataNews = response.data.data.posts;
      for (let i = 0; i < 6; i += 1) {
        document.querySelector('.item-produk').innerHTML += newsTemplate(dataNews[i]);
      }
    } catch (error) {

    }
  },
};

export default Beranda;
