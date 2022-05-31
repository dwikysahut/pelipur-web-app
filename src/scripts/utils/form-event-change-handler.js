/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
const FormEventChangeHandler = {
  async init(formElement) {
    this._formElement = formElement;
    await this._eventChangeHandler(this._formElement);
  },

  async _eventChangeHandler(elements) {
    for (const keys in elements) {
      elements[keys].addEventListener('keyup', (e) => {
        (e.target.value.length > 0 && elements[keys].classList.remove('danger'));
      });
    }
  },

};

export default FormEventChangeHandler;
