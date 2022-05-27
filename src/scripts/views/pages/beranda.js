/* eslint-disable no-return-assign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import { chatTemplateCreator, newsTemplate } from '../templates/template-creator';
import firebase from '../../utils/firebase-config';

// const chat = [];
const Beranda = {
  async render() {
    return `
    <article>
    <div class="layanan"><p>content</p></div>
  </article>
  <article>
    <div class="item-produk"></div>
  </article>
  <br />
  

  <div class="chat">
      <div class="chat__item-container">
        <div class="text-message">
          <!-- <div class="container-message sender">
            <span class="sender-name">me</span>
            <div class="text-message sender">
              <p>halo</p>
            </div>
           
          </div>
          <div class="container-message receiver">
            <span class="sender-name">Admin</span>
            <div class="text-message receiver">
              <p>halo</p>
            </div>
           
          </div>
           -->
        </div>
      </div>
      <div class="chat__form">
        <form class="chat__form__form-message">
            <div class="form__input">
                <label for="inputMessage"></label><br>
                <textarea id="inputMessage" name="inputMessage" placeholder="Type here..." class="form-control input-message" rows="2"></textarea>
            </div>
            <div class="form__submit-container">
                <button type="submit" id="submitMessage" class="submit-button">Submit</button>
            </div>
        </form>
      </div>

    </div>
        `;
  },

  async afterRender() {
    const loadMessage = async () => {
      const chat = [];
      firebase.database().ref('messages/123/321').on('value', (value) => {
        const data = value.val();
        for (const keys in data) {
          const msg = {
            from: data[keys].from,
            message: data[keys].message,
            to: data[keys].to,
          };
          chat.push(msg);
          if (chat.length > 15) {
            chat.splice(0, 6);
          }
        }
        chatTemplateCreator(chat);
      });
    }; loadMessage();

    // firebase.database().ref('users/').on('value', (value) => {
    //   console.log(value.val());
    // });
    const inputMessage = document.querySelector('#inputMessage');
    document.querySelector('#submitMessage').addEventListener('click', (e) => {
      e.preventDefault();
      if (inputMessage.value !== '') {
        // send message

        firebase.database().ref(`/messages/123/321/${new Date().getTime()}`).set({
          from: '123',
          message: inputMessage.value,
          to: '321',

        });

        firebase.database().ref(`/messages/321/123/${new Date().getTime()}`).set({
          from: '321',
          message: inputMessage.value,
          to: '123',

        });
        loadMessage();
        // chat.push({
        //   from: '123',
        //   message: inputMessage.value,
        //   to: '321',
        // });
      }
      inputMessage.value = '';
    });

    document.querySelector('.item-produk').innerHTML = newsTemplate();
  },

};

export default Beranda;
