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
   src="./images/heros/oil.jpg"
   alt="gambar bumi">
   </artikel-custom>

  <div class="slider">
      <img src="./images/heros/biodisel.jpg" />
      <img src="./images/heros/ekonomis.jpg" />
      <img src="./images/heros/bumi1.jpg" />
  </div>
    
<keterangan-slider></keterangan-slider>


        `;
  },

  async afterRender() {
    document.querySelector('.item-produk').innerHTML = newsTemplate();
  },
};

export default Beranda;
