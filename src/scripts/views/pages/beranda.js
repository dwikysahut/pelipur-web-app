/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { newsTemplate } from '../templates/template-creator';
// import firebase from '../../utils/firebase-config';
import '../component/hero';
import '../component/artikelnews';
import '../component/layanan';
import '../component/carousel';
import '../component/keterangan-slide';
import '../component/listmitra';
import NewsDbSource from '../../data/newsdb-source';
import { swalError } from '../../utils/function-helper';
// const chat = [];
const Beranda = {
  async render() {
    if (window.history.state) {
      if (window.history.state.page === 'login') {
        console.log(window.history.state);
        window.location.reload();
        window.history.replaceState({ page: '' }, '', '#/home');
        window.dispatchEvent(new HashChangeEvent('hashchange'));
        return '<div></div>';
      }
      // window.history.state.page = '';
    }
    return `

  <div class="wrapper">
    <custom-hero></custom-hero>
    <layanan-custom></layanan-custom>
    <div>
      <article>
        <div class="item-produk">
        </div>
      </article>

      <artikel-custom src="./images/heros/oil.jpg" alt="gambar bumi">
      </artikel-custom>


      <custom-carousel></custom-carousel>
      <keterangan-slider></keterangan-slider>
      <list-mitra></list-mitra>
    </div>
  </div>
    




        `;
  },

  async afterRender() {
    if (window.history.state && window.history.state.page === 'login') {
      // loading bar
    } else {
      try {
        const response = await NewsDbSource.getAllNews();

        const dataNews = response.data.data.posts;
        const itemContainer = document.querySelector('.item-produk');
        console.log(itemContainer);
        if (itemContainer !== null) {
          for (let i = 0; i < 6; i += 1) {
            itemContainer.innerHTML += newsTemplate(dataNews[i]);
          }
        }
      } catch (error) {
        console.log(error);
        swalError('Ooops something wrong...');
      }
    }
  },
};

export default Beranda;
