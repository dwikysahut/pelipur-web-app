import {
  mitraListTemplate, newsTemplate, skeletonNewsHomeTemplate,
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
        <list-mitra></list-mitra>
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
    let att = '';

    if (itemContainer !== null) {
      for (let i = 0; i < 6; i += 1) {
        if (i % 2 === 0) {
          // atribut aos saat genap

          att = `data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
          `;
          itemContainer.innerHTML += newsTemplate(items[i], att);
        } else {
          // atribut aos selain genap

          att = `data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"`;
          itemContainer.innerHTML += newsTemplate(items[i], att);
        }
      }
    }
  }

  getMitracontainerListener() {
    return document.querySelector('list-mitra');
  }

  showPartners(items) {
    console.log(items);

    const itemContainer = this.getMitracontainerListener().mitraContainer;
    items.forEach((item) => {
      itemContainer.innerHTML += mitraListTemplate(item);
    });
  }
}

export default BerandaView;
