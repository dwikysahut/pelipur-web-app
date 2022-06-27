import { mitraListTemplate, newsTemplate, createSkeletonNewsList } from '../../templates/template-creator';
import '../../component/news-list';
/* eslint-disable class-methods-use-this */
class NewsDetailView {
  getTemplate() {
    return `   
      <div class="news-container">
        <div class="news-inner__title">
          <h2>Berita</h2>
        </div>
        <div class="news-inner__list">
          ${createSkeletonNewsList(20)}
        </div>        
      </div>
    `;
  }

  showNews(items) {
    console.log(items);

    const itemContainer = document.querySelector('.news-inner__list');
    itemContainer.innerHTML = '';
    if (itemContainer !== null) {
      for (let i = 0; i < items.length; i += 1) {
        const element = document.createElement('news-list');
        element.item = items[i];
        itemContainer.appendChild(element);
      }
    }
  }
}

export default NewsDetailView;
