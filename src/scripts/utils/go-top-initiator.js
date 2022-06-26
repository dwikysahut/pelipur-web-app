/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const GoTopInitiator = {

  init({
    goTopButton, body, documentElement,
  }) {
    window.addEventListener('scroll', () => {
      this._initGoTop({
        goTopButton, body, documentElement,
      });
    });
    goTopButton.addEventListener('click', (event) => {
      this._goTopAction({
        event, goTopButton, body, documentElement,
      });
    });
  },

  _initGoTop({
    goTopButton, body, documentElement,
  }) {
    if (body.scrollTop > 500
      || documentElement.scrollTop > 500) {
      goTopButton.classList.add('show');
    } else {
      goTopButton.classList.remove('show');
    }
  },

  _goTopAction({
    event, goTopButton, body, documentElement,
  }) {
    event.preventDefault();
    body.scrollTop ? body.scrollTop = 0 : documentElement.scrollTop = 0;
    goTopButton.classList.remove('show');
  },

};

export default GoTopInitiator;
