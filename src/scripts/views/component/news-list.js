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
                <div class="item-news__image">
                  <img src="" alt="" srcset="${this._item.thumbnail}">
                </div>
                <div class="item-news__content">
                  <h3>
                    ${this._item.title}
                  </h3>
                  <p>${this._item.description}</p>
                  <div class="item-news__footer">
                    <span>
                    ${dateConvert(this._item.pubDate)}
                    </span>
                    <span><a href="${this._item.link}" target="_blank">Kunjungi Link</a></span>
                  </div>
                </div>
              </div>
            </div>
            `;
  }
}

customElements.define('news-list', NewsList);
