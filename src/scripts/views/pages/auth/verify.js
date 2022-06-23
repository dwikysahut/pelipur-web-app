/* eslint-disable no-unused-expressions */
import AuthDbSource from '../../../data/authdb-source';

import VerifyPresenter from './verify/verify-presenter';
import VerifyView from './verify/verify-view';

const view = new VerifyView();
const Verify = {
  async render() {
    return {
      footer: false,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new VerifyPresenter({ view, authDb: AuthDbSource });
  },
};

export default Verify;
