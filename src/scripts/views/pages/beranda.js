import { newsTemplate } from '../templates/template-creator';

const Beranda = {
  async render() {
    return `
    <article>
    <div class="layanan"><p>content</p></div>
  </article>
  <article>
    <div class="item-produk"></div>
  </article>
  <br />
        `;
  },

  async afterRender() {
    document.querySelector('.item-produk').innerHTML = newsTemplate();
  },
};

export default Beranda;
