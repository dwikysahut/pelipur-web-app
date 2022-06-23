import BisnisPresenter from './bisnis/bisnis-presenter';
import BisnisView from './bisnis/bisnis-view';

const view = new BisnisView();
const Bisnis = {
  async render() {
    return {
      footer: true,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new BisnisPresenter({ view });
  },
};

export default Bisnis;
