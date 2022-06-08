/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer({ event, drawer, button });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer({ event, drawer, button });
    });
  },

  _toggleDrawer({ event, drawer, button }) {
    event.stopPropagation();
    drawer.classList.toggle('slide');
    button.classList.toggle('rotate');
  },

  _closeDrawer({ event, drawer, button }) {
    event.stopPropagation();
    drawer.classList.remove('slide');
    button.classList.remove('rotate');
  },
};

export default DrawerInitiator;
