/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import CONFIG from '../../globals/config';
import firebase from '../../utils/firebase-config';
import { chatTemplateAdminCreator, chatTemplateCreator, userListChat } from '../templates/template-creator';

class LiveChat extends HTMLElement {
  connectedCallback() {
    this._idTarget = '';

    if (localStorage.getItem('role') === '2') {
      this.loadUserChat();
    } else if (localStorage.getItem('role') === '1') {
      this.loadAdminChat();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.loadAdminChat();
  }

  static get observedAttributes() {
    return ['disabled'];
  }

  async loadAdminChat() {
    this.renderAdminChat();

    const loadUserList = async () => {
      await firebase
        .database()
        .ref('users')
        .on('value', async (value) => {
          console.log(Object.values(value.val()));
          const container = document.querySelector('.user-list');
          container.innerHTML = '';
          console.log(Object.keys(value.val()));
          await userListChat(Object.values(value.val()), container);
          this._onClickUserList();
        });
    };
    await loadUserList();
    // const inputMessage = document.querySelector('#inputMessageAdmin');
    // inputMessage.setAttribute('disabled', true);
  }

  _onClickUserList() {
    const userListElement = document.querySelectorAll('.user-list__item');
    console.log(userListElement);
    const loadMesageFromUser = async (id) => {
      firebase
        .database()
        .ref(`messages/${localStorage.getItem('id')}/${id}`)
        .on('value', (value) => {
          const chat = [];
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
          chatTemplateAdminCreator(chat, localStorage.getItem('id'));
        });
    };
    // when user list clicked

    userListElement.forEach((element) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.currentTarget.dataset.id);
        this._idTarget = e.currentTarget.dataset.id;
        loadMesageFromUser(e.currentTarget.dataset.id);
        if (this._idTarget !== '') {
          const inputMessage = document.querySelector('#inputMessageAdmin');
          inputMessage.removeAttribute('disabled');

        loadMesageFromUser(this._idTarget);
        }
      });
    });
    if (this._idTarget === '') {
      const inputMessage = document.querySelector('#inputMessageAdmin');
      inputMessage.setAttribute('disabled', true);
    }
    const inputMessage = document.querySelector('#inputMessageAdmin');
    document.querySelector('#submitMessageAdmin').addEventListener('click', (e) => {
      e.preventDefault();
      if (inputMessage.value !== '') {
      // send message

        firebase.database().ref(`/messages/${localStorage.getItem('id')}/${this._idTarget}/${new Date().getTime()}`).set({
          from: localStorage.getItem('id'),
          message: inputMessage.value,
          to: this._idTarget,
        });

        firebase.database().ref(`/messages/${this._idTarget}/${localStorage.getItem('id')}/${new Date().getTime()}`).set({
          from: localStorage.getItem('id'),
          message: inputMessage.value,
          to: this._idTarget,
        });

        loadMesageFromUser(this._idTarget);
      }
      inputMessage.value = '';
    });
  }

  // async updateMessage() {
  //   const chat = [];
  //   firebase
  //     .database()
  //     .ref(`messages/${localStorage.getItem('id')}/${id}`)
  //     .on('child_added', (value) => {
  //       const data = value.val();
  //       for (const keys in data) {
  //         const msg = {
  //           from: data[keys].from,
  //           message: data[keys].message,
  //           to: data[keys].to,
  //         };
  //         chat.push(msg);
  //         if (chat.length > 15) {
  //           chat.splice(0, 6);
  //         }
  //       }
  //       chatTemplateCreator(chat, localStorage.getItem('id'), id);
  //     });
  // }

  loadUserChat() {
    this.renderChatUser();

    const loadMessage = async () => {
      firebase
        .database()
        .ref(`messages/${localStorage.getItem('id')}/${CONFIG.ADMIN_ID}`)
        .on('value', (value) => {
          const chat = [];
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
          chatTemplateCreator(chat, localStorage.getItem('id'));
        });
    };
    loadMessage();

    const inputMessage = document.querySelector('#inputMessage');
    document.querySelector('#submitMessage').addEventListener('click', (e) => {
      e.preventDefault();
      if (inputMessage.value !== '') {
      // send message

        firebase.database().ref(`/messages/${localStorage.getItem('id')}/${CONFIG.ADMIN_ID}/${new Date().getTime()}`).set({
          from: localStorage.getItem('id'),
          message: inputMessage.value,
          to: CONFIG.ADMIN_ID,
        });

        firebase.database().ref(`/messages/${CONFIG.ADMIN_ID}/${localStorage.getItem('id')}/${new Date().getTime()}`).set({
          from: localStorage.getItem('id'),
          message: inputMessage.value,
          to: CONFIG.ADMIN_ID,
        });
        firebase.database().ref(`/users/${localStorage.getItem('id')}`).set({
          id: localStorage.getItem('id'),
          email: localStorage.getItem('email'),
          nama: localStorage.getItem('nama'),
        });
        loadMessage();
      }
      inputMessage.value = '';
    });
  }

  renderAdminChat() {
    this.innerHTML = `
    <div class="chat-admin" id="chatContainer">
        <div class="chat__inner">

            <div class="user-list">


            </div>
            <div class="chat__item-admin">
                <div class="text-message">
                  

                </div>
            </div>

        </div>
        <div class="chat__form">
            <form class="chat__form__form-message">
                <div class="form__input">
                    <textarea id="inputMessageAdmin" name="inputMessage" placeholder="Type here..."
                        class="form-control input-message" rows="1"></textarea>
                </div>
                <div class="form__submit-container">
                    <button type="submit" id="submitMessageAdmin" class="submit-button">Submit</button>
                </div>
            </form>
        </div>

    </div>`;
  }

  renderChatUser() {
    this.innerHTML = `
       

  <div class="chat" id="chatContainer">
  <div class="chat__item-container">
    <div class="text-message">
     
    </div>
  </div>
  <div class="chat__form">
    <form class="chat__form__form-message">
        <div class="form__input">
            <textarea id="inputMessage" name="inputMessage" placeholder="Type here..." class="form-control input-message" rows="2"></textarea>
        </div>
        <div class="form__submit-container">
            <button type="submit" id="submitMessage" class="submit-button">Submit</button>
        </div>
    </form>
  </div>

</div>
</div>
      `;
  }
}

customElements.define('live-chat', LiveChat);
