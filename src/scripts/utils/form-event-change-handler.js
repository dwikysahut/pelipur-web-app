/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
const FormEventChangeHandler = {
  async init(formRegisterElement) {
    this._formRegisterElement = formRegisterElement;
    await this._eventChangeHandler(this._formRegisterElement);
  },

  async _initFunction() {
    this._linkSignUp.onclick = ((e) => {
      e.preventDefault();
      this._signupBtn.click();
    });
    this._signupBtn.addEventListener('click', () => {
      this._loginForm.style.marginLeft = '-50%';
      // this._loginText.style.marginLeft = '-50%';
    });
    this._loginBtn.addEventListener('click', () => {
      this._loginForm.style.marginLeft = '0%';
      // this._loginText.style.marginLeft = '0%';
    });
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
