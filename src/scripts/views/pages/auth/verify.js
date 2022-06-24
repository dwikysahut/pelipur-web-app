/* eslint-disable no-unused-expressions */
import AuthDbSource from '../../../data/authdb-source';
import { swalError } from '../../../utils/function-helper';

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
    if (localStorage.getItem('token')) {
      window.history.replaceState('', '', '#/home');
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
    new VerifyPresenter({ view, authDb: AuthDbSource });
  },
};

export default Verify;
