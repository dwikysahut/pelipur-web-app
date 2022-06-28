import {
  mitraListTemplate, newsTemplate, skeletonNewsHomeTemplate, skeletonMitraListTemplate,
} from '../../templates/template-creator';

/* eslint-disable class-methods-use-this */
class BerandaView {
  getTemplate() {
    return `
    
    <div class="wrapper">
      <custom-hero></custom-hero>
      
        <artikel-custom></artikel-custom>
        </div>
        <div>
        <custom-carousel></custom-carousel>
        <layanan-custom></layanan-custom>
        <article>
          <h2 class="news-title" tabindex="0">Berita</h2>
          <div class="item-produk">
            ${skeletonNewsHomeTemplate(6)}
          </div>
          <div class="news-list">
            <a href="#/news">Tampilkan semua <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </article>
        <list-mitra>
          ${skeletonMitraListTemplate(6)}
        </list-mitra>
        </div>
      
    </div>
              `;
  }

  getFormListener(callback) {
    callback({ nameForm: document.querySelector('#cityNameForm') });
  }

  getNewsContainerListener() {
    return document.querySelector('.item-produk');
  }

  showNews(items) {
    const itemContainer = document.querySelector('.item-produk');
    itemContainer.innerHTML = '';
    console.log(items);
    if (items.length < 1) {
      // itemContainer.innerHTML += createSkeletonNewsList(6);
      // empty

      return;
    }

    if (itemContainer !== null) {
      for (let i = 0; i < 6; i += 1) {
        itemContainer.innerHTML += newsTemplate(items[i]);
      }
    }
  }

  getMitracontainerListener() {
    return document.querySelector('list-mitra');
  }

  showPartners(items) {
    console.log(items);
    const itemContainer = this.getMitracontainerListener().mitraContainer;
    itemContainer.innerHTML = '';
    items.forEach((item) => {
      itemContainer.innerHTML += mitraListTemplate(item);
    });
  }
}

export default BerandaView;
