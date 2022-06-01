/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
// import Swal from 'sweetalert2';
import AuthDbSource from '../../../data/authdb-source';
import FormEventChangeHandler from '../../../utils/form-event-change-handler';
import SliderButtonLoginPresenter from '../../../utils/slider-button-login-presenter';
import { createAuthTemplate } from '../../templates/template-creator';
import {
  emptyFormHandler, formEmailValidation, passwordValidation, swalConfirm, swalError, validateEmail,
} from '../../../utils/function-helper';

const Auth = {
  async render() {
    return `
      ${createAuthTemplate()}
          `;
  },

  async afterRender() {
    // const loginText = document.querySelector('.title-text .login');
    const loginForm = document.querySelector('form.login');
    const loginBtn = document.querySelector('label.login');
    const signupBtn = document.querySelector('label.signup');
    const signupLink = document.querySelector('form .signup-link a');
    const linkSignUp = document.querySelector('#linkSignUp');

    const inputEmailLogin = document.querySelector('#inputEmailLogin');
    const inputPasswordLogin = document.querySelector('#inputPasswordLogin');

    const formRegister = {
      nama: document.querySelector('#inputNameReg'),
      email: document.querySelector('#inputEmailReg'),
      no_telp: document.querySelector('#inputPhoneReg'),
      alamat: document.querySelector('#inputAddressReg'),
      password: document.querySelector('#inputPasswordReg'),
      confirmPassword: document.querySelector('#inputRePasswordReg'),
    };

    SliderButtonLoginPresenter.init({
      loginForm, loginBtn, signupBtn, signupLink, linkSignUp,
    });

    // handler change register form input
    FormEventChangeHandler.init(formRegister);

    // handler change login form input
    FormEventChangeHandler.init({ inputEmailLogin, inputPasswordLogin });

    document.querySelector('#submitLogin').addEventListener('click', async (e) => {
      e.preventDefault();
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
    document.querySelector('#submitRegister').addEventListener('click', async (e) => {
      e.preventDefault();
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
  },
  async _loginHandler({ email, password }) {
    try {
      const response = await AuthDbSource.postLogin({ email, password });
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
  },
  async _registerHandler(form) {
    try {
      const response = await AuthDbSource.postRegister({
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
  },
};

export default Auth;
