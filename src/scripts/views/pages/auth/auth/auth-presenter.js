/* eslint-disable no-param-reassign */
import FormEventChangeHandler from '../../../../utils/form-event-change-handler';
import {
  emptyFormHandler, formEmailValidation, passwordValidation, swalConfirm, swalError, validateEmail,
} from '../../../../utils/function-helper';
import SwiperButtonLoginPresenter from '../../../../utils/slider-button-login-presenter';

class AuthPresenter {
  constructor({ view, authDb }) {
    this._view = view;
    this._authDb = authDb;

    this._listenElementButtonInit();
    this._formLoginEventChangeHandler();
    this._formRegisterEventChangeHandler();
    this._loginFormHandler();
    this._registerFormHandler();
  }

  // swiper button in auth page
  _listenElementButtonInit() {
    this._view.elementButtonInit(({
      loginForm, loginBtn, signupBtn, signupLink, linkSignUp,
    }) => {
      SwiperButtonLoginPresenter.init({
        loginForm, loginBtn, signupBtn, signupLink, linkSignUp,
      });
    });
  }

  // handler change login form input
  _formLoginEventChangeHandler() {
    this._view.getLoginFormListener(({ inputEmailLogin, inputPasswordLogin }) => {
      FormEventChangeHandler.init({ inputEmailLogin, inputPasswordLogin });
    });
  }

  _formRegisterEventChangeHandler() {
    this._view.getRegisterFormListener((formRegister) => {
      FormEventChangeHandler.init(formRegister);
    });
  }

  _loginFormHandler() {
    this._view.loginFormListener(async ({ inputEmailLogin, inputPasswordLogin }) => {
      if (inputEmailLogin.value !== '' && inputPasswordLogin.value !== '') {
        console.log(validateEmail(inputEmailLogin.value));
        if (formEmailValidation(inputEmailLogin, '#alertEmailLogin')) {
          await this._loginHandler(
            { email: inputEmailLogin.value, password: inputPasswordLogin.value },
          );
          inputEmailLogin.value = '';
          inputPasswordLogin.value = '';
        }
      } else {
        emptyFormHandler(inputEmailLogin, inputPasswordLogin);
      }
    });
  }

  async _loginHandler({ email, password }) {
    try {
      const response = await this._authDb.postLogin({ email, password });
      if (response.status === 200) {
        // console.log(result);
        localStorage.setItem('email', response.data.data.email);
        localStorage.setItem('image', response.data.data.image);
        localStorage.setItem('role', response.data.data.id_role);
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);

        await swalConfirm(`${response.data.message}`, '#/home');
      }
    } catch (error) {
      console.log(error);
      if (error.response) {
        if (error.response.status === 401) {
          if (error.response.data.message === 'Email does not verify, Please verify your account first') {
            await swalError(`${error.response.data.message}`, '#/verify');
            return;
          }

          await swalError(`${error.response.data.message}`);
        } else {
          await swalError('Something Wrong');
        }
      }
    }
  }

  _registerFormHandler() {
    this._view.registerFormListener(async (formRegister) => {
      if (formRegister.email.value !== '' && formRegister.alamat.value !== '' && formRegister.no_telp.value !== ''
        && formRegister.password.value !== '' && formRegister.nama.value !== '' && formRegister.confirmPassword.value !== '') {
        if (formEmailValidation(formRegister.email, '#alertEmailReg')) {
          if (!passwordValidation(formRegister.password, '#alertPassReg')) return;

          if (formRegister.password.value !== formRegister.confirmPassword.value) {
            await swalError('Password Doesn\'t match');
            formRegister.password.classList.add('danger');
            formRegister.confirmPassword.classList.add('danger');
            return;
          }
          await this._registerHandler(formRegister);
          formRegister.email.value = '';
          formRegister.no_telp.value = '';
          formRegister.alamat.value = '';
          formRegister.password.value = '';
          formRegister.email.value = '';
          formRegister.confirmPassword.value = '';
          formRegister.nama.value = '';
        }
      } else {
        emptyFormHandler(
          formRegister.nama,
          formRegister.email,
          formRegister.password,
          formRegister.nama,
          formRegister.no_telp,
          formRegister.alamat,
          formRegister.confirmPassword,
        );
      }
    });
  }

  async _registerHandler(form) {
    try {
      const response = await this._authDb.postRegister({
        nama: form.nama.value,
        email: form.email.value,
        no_telp: form.no_telp.value,
        alamat: form.alamat.value,
        password: form.password.value,

      });
      console.log(response);
      if (response.status === 200) {
        await swalConfirm(`${response.data.message}, Check Your Email for Verification Code`, '#/verify');
      }
    } catch (error) {
      console.log(error);
      await swalError(`${error.response.data.message}`);
    }
  }
}
export default AuthPresenter;
