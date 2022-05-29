import { newsTemplate } from '../templates/template-creator';
import '../component/artikelnews.js';
import '../component/layanan.js';

const Beranda = {
  async render() {
    return ` 
    
  <layanan-custom></layanan-custom>

  <article>
  <div class="item-produk">
  </div></article>

   <artikel-custom 
   src="./images/heros/bumi.jpg"
   alt="gambar bumi">
   </artikel-custom>


        `;
  },

  async afterRender() {
    document.querySelector('.item-produk').innerHTML = newsTemplate();
  },
};

export default Beranda;
