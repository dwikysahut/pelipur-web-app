/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
const FormEventChangeHandler = {
  async init(formElement) {
    this._formElement = formElement;
    await this._eventChangeHandler(this._formElement);
    // await this._fileEventChangeHandler(this._formElement);
  },

  async _eventChangeHandler(elements) {
    for (const keys in elements) {
      elements[keys].addEventListener('change', (e) => {
        if (e.target.files) {
          (e.target.files.length > 0 && elements[keys].classList.remove('danger'));
        }
        (e.target.value.length > 0 && elements[keys].classList.remove('danger'));
      });
    }
  },
  // async _fileEventChangeHandler(elements) {
  //   for (const keys in elements) {
  //     elements[keys].addEventListener('change', (e) => {
  //       if (e.target.files) {
  //         (e.target.files.length > 0 && elements[keys].classList.remove('danger'));
  //       }
  //       (e.target.value.length > 0 && elements[keys].classList.remove('danger'));
  //     });
  //   }
  // },

};

export default FormEventChangeHandler;
