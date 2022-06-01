/* eslint-disable no-unused-expressions */
import AuthDbSource from '../../../data/authdb-source';

import VerifyPresenter from './verify/verify-presenter';
import VerifyView from './verify/verify-view';

const view = new VerifyView();
const Verify = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new VerifyPresenter({ view, authDb: AuthDbSource });
  },
};

export default Verify;
