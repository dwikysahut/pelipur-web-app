/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
// import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import { swalError } from '../../../../utils/function-helper';

class AdminDashboardPresenter {
  constructor({ view, dataDb }) {
    this._view = view;
    this._dataDb = dataDb;
    this._showAllData();
  }

  async _showAllData() {
    try {
      const response = await this._dataDb.getAllDataCount(localStorage.getItem('token'));
      this._renderData(response.data.data);
    } catch (error) {
      // swalError('Ooops Something wrong', '#/');
    }
  }

  _renderData(data) {
    this._view.showAllData(data);
  }
}
export default AdminDashboardPresenter;
