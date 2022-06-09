import NewsDbSource from '../../data/newsdb-source';
import { createSkeletonNewsList } from '../templates/template-creator';
import NewsDetailPresenter from './news-detail/news-detail-presenter';
import NewsDetailView from './news-detail/news-detail-view';

const view = new NewsDetailView();
const NewsDetail = {
  async render() {
    return `
      ${view.getTemplate()}
        `;
  },

  async afterRender() {
    new NewsDetailPresenter({ view, newsDb: NewsDbSource });
  },
};

export default NewsDetail;
