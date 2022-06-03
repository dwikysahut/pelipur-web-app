import CONFIG from '../../globals/config';

class ListBerita extends HTMLElement {
  set item(item) {
    this._item = item;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="wrapper-news">
          <div class="wrapper-news__item">
            <div class="item-news__image">
              <img src="" alt="" srcset="./placeholder.png">
            </div>
            <div class="item-news__content">
              <h3>
                Title
              </h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, velit!</p>
              <div class="item-news__footer">
                <span>
                  20-12-2022
                </span>
                <span>kunjungi link</span>
              </div>
            </div>
          </div>
        </div>
        `;
  }
}
customElements.define('catalog-item', ListBerita);
