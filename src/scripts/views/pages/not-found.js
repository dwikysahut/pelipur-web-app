/* eslint-disable no-empty-function */
import NotFoundPresenter from './not-found/not-found-presenter';
import NotFoundView from './not-found/not-found-view';

const view = new NotFoundView();
const NotFound = {
  async render() {
    return {
      footer: true,
      content: view.getTemplate(),
    };
  },

  async afterRender() { new NotFoundPresenter({ view }); },

};

export default NotFound;
