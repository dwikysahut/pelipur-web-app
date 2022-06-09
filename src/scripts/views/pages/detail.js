/* eslint-disable linebreak-style */
/* eslint-disable no-empty-function */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
import { createSkeletonNewsList } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
       ${createSkeletonNewsList(10)}
        `;
  },

  async afterRender() {},
};

export default Detail;
