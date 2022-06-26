import AboutUsPresenter from './about-us/aboutUs-presenter';
import AboutUsView from './about-us/aboutUs-view';

const view = new AboutUsView();
const AboutUs = {
  async render() {
    return {
      footer: true,
      content: view.getTemplate(),
    };
  },

  async afterRender() {
    new AboutUsPresenter({ view });
  },
};

export default AboutUs;
