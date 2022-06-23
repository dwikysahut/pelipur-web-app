import CONFIG from '../../../globals/config';
import FormEventChangeHandler from '../../../utils/form-event-change-handler';
import {
  closeLoader, emptyFormHandler, openLoader, swalConfirm, swalConfirmation, swalError,
} from '../../../utils/function-helper';

class NewsDetailPresenter {
  constructor({ view, newsDb, dataDb }) {
    this._view = view;
    this._newsDb = newsDb;
    this._dataDb = dataDb;
    this._showNewsData();
  }

  async _showNewsData() {
    try {
      const response = await this._dataDb.getAllNews();
      // console.log(response);
      const dataNews = response.data.data;
      this._renderNews(dataNews);
    } catch (error) {
      console.log(error);
    //   swalError('Ooops Something wrong', '#/');
    }
  }

  _renderNews(data) {
    this._view.showNews(data);
  }
}
export default NewsDetailPresenter;
