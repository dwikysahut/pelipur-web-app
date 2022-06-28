/* eslint-disable linebreak-style */
import { swalError } from '../../utils/function-helper';
import UnauthorizedPresenter from './unauthorized/unauthorized-presenter';
import UnauthorizedView from './unauthorized/unauthorized-view';

const view = new UnauthorizedView();
const Unauthorized = {
  async render() {
    if (!localStorage.getItem('token')) {
      await swalError('Please Login First', '#/auth');
      return {
        content: '<div></div>',
      };
    }
    return {
      footer: true,
      content: view.getTemplate(),
    };
  },

  async afterRender() { new UnauthorizedPresenter({ view }); },
};

export default Unauthorized;
