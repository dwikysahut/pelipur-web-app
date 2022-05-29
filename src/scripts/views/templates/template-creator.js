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

// eslint-disable-next-line import/prefer-default-export
export { newsTemplate, chatTemplateCreator };
