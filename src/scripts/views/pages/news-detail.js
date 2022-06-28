import DataDbSource from '../../data/datadb-source';
import NewsDbSource from '../../data/newsdb-source';
import NewsDetailPresenter from './news-detail/news-detail-presenter';
import NewsDetailView from './news-detail/news-detail-view';

const view = new NewsDetailView();
const NewsDetail = {
  async render() {
    return {
      footer: true,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new NewsDetailPresenter({ view, newsDb: NewsDbSource, dataDb: DataDbSource });
  },
};

export default NewsDetail;
