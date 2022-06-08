/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { newsTemplate, skeletonNewsHomeTemplate } from '../templates/template-creator';
// import firebase from '../../utils/firebase-config';
import '../component/hero';
import '../component/artikelnews';
import '../component/layanan';
import '../component/carousel';
import '../component/keterangan-slide';
import '../component/listmitra';
import '../component/custom-loader';
import NewsDbSource from '../../data/newsdb-source';
import { openLoader, swalError } from '../../utils/function-helper';
// const chat = [];
const Beranda = {
  async render() {
    if (window.history.state) {
      if (window.history.state.page === 'login') {
        console.log(window.history.state);
        window.location.reload();
        window.history.replaceState({ page: '' }, '', '#/home');
        window.dispatchEvent(new HashChangeEvent('hashchange'));
        return ' <custom-loader></custom-loader>';
      }
      // window.history.state.page = '';
    }
    return `
   
  <div class="wrapper">
    <custom-hero></custom-hero>
    <div>
      <artikel-custom src="./images/oil-cooking.png" alt="Minyak"></artikel-custom>
      <custom-carousel></custom-carousel>
      <layanan-custom></layanan-custom>
      <article>
        <h2 class="news-title">Berita</h2>
        <div class="item-produk">
          ${skeletonNewsHomeTemplate(20)}
        </div>
        <a class="news-list" href="#/news">Baca selengkapnya <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </article>
      <list-mitra></list-mitra>
    </div>
  </div>
        `;
  },

  async afterRender() {
    if (window.history.state && window.history.state.page === 'login') {
      // loading bar
      openLoader(document.querySelector('custom-loader'));
    } else {
      try {
        const response = await NewsDbSource.getAllNews();

        const dataNews = response.data.data.posts;
        const itemContainer = document.querySelector('.item-produk');
        itemContainer.innerHTML = '';
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
