import { mitraListTemplate, newsTemplate } from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class BerandaView {
  getTemplate() {
    return `   
    <div class="wrapper">
      <custom-hero></custom-hero>
      <div>
        <artikel-custom src="./images/oil-cooking.png" alt="Minyak"></artikel-custom>
        <custom-carousel></custom-carousel>
        <layanan-custom></layanan-custom>
        <article>
          <h2 class="news-title">Berita</h2>
          <div class="item-produk"></div>
        </article>
        <list-mitra></list-mitra>
      </div>
    </div>
              `;
  }

  getFormListener(callback) {
    callback({ nameForm: document.querySelector('#cityNameForm') });
  }

  showNews(items) {
    console.log(items);
    const itemContainer = document.querySelector('.item-produk');
    if (itemContainer !== null) {
      for (let i = 0; i < 6; i += 1) {
        itemContainer.innerHTML += newsTemplate(items[i]);
      }
    }
  }

  showPartners(items) {
    console.log(items);
    const itemContainer = document.querySelector('list-mitra').mitraContainer;
    items.forEach((item) => {
      itemContainer.innerHTML += mitraListTemplate(item);
    });
  }
}

export default BerandaView;
