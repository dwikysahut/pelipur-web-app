import data from '../../../DATA.json';

const newsTemplate = () => {
  let news = '';
  data.restaurants.forEach((berita) => {
    news += `
            <div class="card">
              <div class="card-item" tabindex="0">
              <img src="${berita.pictureId}" alt="" >
              <h4>${berita.city}</h4>
              <h3>${berita.rating}</h3>
              <h2>${berita.name}</h2>
            </div>
          </div>    
    
    `;
  });
  return news;
};
const chatTemplateCreator = (chat) => {
  const messageContainer = document.querySelector('.text-message');
  let chatTemplate = '';

  //     chat.map((data) => (messageContainer.innerHTML += `
  //      <div class="container-message ${data.from === '123' ? 'sender' : 'receiver'}">
  //       <span class="sender-name" >${data.from === '123' ? 'me' : 'admin'}</span>
  //       <div class="text-message ${data.from === '123' ? 'sender' : 'receiver'}">
  //         <p>$P</p>
  //       </div>

  //     </div>
  // `));
  chat.forEach((item) => {
    chatTemplate += `
      <div class="container-message ${item.from === '123' ? 'sender' : 'receiver'}">
       <span class="sender-name" >${item.from === '123' ? 'me' : 'admin'}</span>
       <div class="text-message ${item.from === '123' ? 'sender' : 'receiver'}">
         <p>${item.message}</p>
       </div>
      
     </div>
 `;
    messageContainer.innerHTML = chatTemplate;
    document.querySelector('.chat__item-container').scrollTop = messageContainer.scrollHeight;
  });
};

const createSkeletonNewsList = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="wrapper-news">
    <div class="wrapper-news__item">
      <div class="item-news__image">
        <img src="" alt="" srcset="./images/placeholder.png">
      </div>
      <div class="item-news__content">
        <h3>
          Title
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, velit!</p>
        <div class="item-news__footer">
          <span class="footer__date">
            null
          </span>
          <a href="http://"> <span>null</span></a>
         
        </div>
      </div>
    </div>
  </div>
    `;
  }
  return template;
};

// eslint-disable-next-line import/prefer-default-export
export { newsTemplate, chatTemplateCreator, createSkeletonNewsList };
