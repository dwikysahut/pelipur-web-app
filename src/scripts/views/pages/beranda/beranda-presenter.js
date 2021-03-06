/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */

/* eslint-disable guard-for-in */
class BerandaPresenter {
  constructor({ view, newsDb, dataDb }) {
    this._view = view;
    this._newsDb = newsDb;
    this._dataDb = dataDb;
    this._showNewsData();
    this._showPartnersData();
  }

  async _showNewsData() {
    if (this._view.getNewsContainerListener()) {
      try {
        const response = await this._dataDb.getAllNews();
        if (response.status === 200) {
          const dataNews = response.data.data;
          // console.log(dataNews);
          this._renderNews(dataNews);
        }
      } catch (error) {
        console.log(error);
      // swalError('Ooops Something wrong', '#/');
      }
    }
  }

  async _showPartnersData() {
    if (this._view.getMitracontainerListener()
    && this._view.getMitracontainerListener().mitraContainer !== null) {
      try {
        const response = await this._dataDb.getAllPartners(localStorage.getItem('token'));
        if (response.status === 200) {
          this._renderPartners(response.data.data);
        }
      } catch (error) {
        if (this._view.getMitracontainerListener()
        && this._view.getMitracontainerListener().mitraContainer !== null) {
          this._renderPartners([]);
        }
      //   swalError('Ooops Something wrong', '#/');
      }
    }
  }

  _renderNews(data) {
    this._view.showNews(data);
  }

  _renderPartners(data) {
    this._view.showPartners(data);
  }
}
export default BerandaPresenter;
