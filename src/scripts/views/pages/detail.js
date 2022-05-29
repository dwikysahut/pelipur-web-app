import { createSkeletonNewsList } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
       ${createSkeletonNewsList(10)}
        `;
  },

  async afterRender() {
    
  },
};

export default Detail;
