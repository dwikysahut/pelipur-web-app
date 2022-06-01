const SwiperButtonLoginPresenter = {
  async init({
    loginForm, loginBtn, signupBtn, signupLink, linkSignUp,
  }) {
    this._loginForm = loginForm;
    this._loginBtn = loginBtn;
    this._signupBtn = signupBtn;
    this._signupLink = signupLink;
    this._linkSignUp = linkSignUp;
    await this._initFunction();
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

};

export default SwiperButtonLoginPresenter;
