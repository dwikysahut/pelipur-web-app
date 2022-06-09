import { mitraListTemplate, newsTemplate, createSkeletonNewsList } from '../../templates/template-creator';
import '../../component/news-list';
/* eslint-disable class-methods-use-this */
class NewsDetailView {
  getTemplate() {
    return `   
   <div class="news-container">
   ${createSkeletonNewsList(20)}
   </div>
              `;
  }

  showNews(items) {
    console.log(items);

    const itemContainer = document.querySelector('.news-container');
    itemContainer.innerHTML = '';
    if (itemContainer !== null) {
      for (let i = 0; i < 20; i += 1) {
        const element = document.createElement('news-list');
        element.item = items[i];
        console.log(element);
        itemContainer.appendChild(element);
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

export default NewsDetailView;
