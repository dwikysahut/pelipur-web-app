import { dateConvert } from '../../utils/function-helper';

/* eslint-disable linebreak-style */
class NewsList extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="wrapper-news">
        <div class="wrapper-news__item">
          <div 
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true" 
            class="item-news__image">
            <img src="${this._item.urlToImage !== null ? this._item.urlToImage : './images/no_image_available.png'}" alt="${this._item.title}" >
            </div>
          <div
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true" 
            class="item-news__content">
            <h3>${this._item.title}</h3>
            <p>${this._item.description}</p>
            <div class="item-news__footer">
              <span>${dateConvert(this._item.publishedAt)}</span>
              <span><a href="${this._item.url}" target="_blank" rel="noreferrer" class="news-link">Selengkapnya <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('news-list', NewsList);
