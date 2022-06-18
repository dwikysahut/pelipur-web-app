/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
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
import BerandaView from './beranda/beranda-view';
import BerandaPresenter from './beranda/beranda-presenter';
import DataDbSource from '../../data/datadb-source';
// const chat = [];
const view = new BerandaView();
const Beranda = {
  async render() {
    if (window.history.state) {
      if (window.history.state.page === 'login' || window.history.state.page === 'logout') {
        console.log(window.history.state);
        window.location.reload();
        window.history.replaceState({ page: '' }, '', '#/home');
        window.dispatchEvent(new HashChangeEvent('hashchange'));
        return ' <custom-loader></custom-loader>';
      }
    }
    return {
      footer: true,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    if (window.history.state && window.history.state.page === 'login') {
      // loading bar
      openLoader(document.querySelector('custom-loader'));
    } else {
      new BerandaPresenter({ view, newsDb: NewsDbSource, dataDb: DataDbSource });
    }
  },
};

export default Beranda;
