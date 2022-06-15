/* eslint-disable no-underscore-dangle */
const OpenChatInitiator = {

  init({ button, chatContainer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer({ event, chatContainer });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer({ event, chatContainer });
    });
  },

  _toggleDrawer({ event, chatContainer }) {
    event.stopPropagation();
    if (chatContainer !== null) chatContainer.classList.toggle('show');
  },

  _closeDrawer({ event, chatContainer }) {
    event.stopPropagation();
    if (chatContainer !== null) { chatContainer.classList.remove('show'); }
  },
};

export default OpenChatInitiator;
