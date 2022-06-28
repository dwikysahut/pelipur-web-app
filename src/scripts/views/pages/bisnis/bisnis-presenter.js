/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */

import { errorFetch } from '../../../utils/function-helper';

/* eslint-disable guard-for-in */
class BisnisPresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._showAllData();
  }

  async _showAllData() {
    console.log('bisnis');
    try {
      const response = await this._dataDb.getAllDataCount(localStorage.getItem('token'));
      this._renderData(response.data.data);
      console.log('sss');
    } catch (error) {
      console.log(error);

      // swalError('Ooops Something wrong', '#/');
    }
  }

  _renderData(data) {
    this._view.showAllData(data);
  }
}
export default BisnisPresenter;
