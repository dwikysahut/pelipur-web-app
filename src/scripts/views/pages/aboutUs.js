/* eslint-disable no-empty-function */
/* eslint-disable import/extensions */

import AboutUsView from './about-us/aboutUs-view.js';

const view = new AboutUsView();
const AboutUs = {
  async render() {
    return {
      footer: true,
      content: view.getTemplate(),
    };
  },

  async afterRender() {},
};

export default AboutUs;
