/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { chatTemplateCreator, newsTemplate } from '../templates/template-creator';
import firebase from '../../utils/firebase-config';
import '../component/hero';
// const chat = [];
const Beranda = {
  async render() {
    return `
    <div class="wrapper">
    <custom-hero></custom-hero>
    <div>
      <article>
        <div class="layanan">
          <p>content</p>
        </div>
      </article>
      <article>
        <div class="item-produk"></div>
      </article>
      <br />
    </div>

        `;
  },

  async afterRender() {
    document.querySelector('.item-produk').innerHTML = newsTemplate();
  },

};

export default Beranda;
