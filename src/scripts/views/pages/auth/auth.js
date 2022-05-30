/* eslint-disable no-shadow */
/* eslint-disable no-unused-expressions */
import Swal from 'sweetalert2';
import AuthDbSource from '../../../data/authdb-source';
import FormEventChangeHandler from '../../../utils/form-event-change-handler';
import SliderButtonLoginPresenter from '../../../utils/slider-button-login-presenter';
import { createAuthTemplate } from '../../templates/template-creator';

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

    const registerHandler = async (form) => {
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
          Swal.fire({
            icon: 'success',
            title: 'Success',
            confirmButtonText: 'Okay!',
            confirmButtonColor: '#005555',
            text: `${response.data.message}, Check Your Email for Verification Code`,
          }).then((result) => {
            if (result.isConfirmed) {
              window.history.replaceState('', '', '#/verify');
              window.dispatchEvent(new HashChangeEvent('hashchange'));
            }
          });
        }
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        });
      }
      formRegister.email.value = '';
      formRegister.no_telp.value = '';
      formRegister.alamat.value = '';
      formRegister.password.value = '';
      formRegister.email.value = '';
      formRegister.confirmPassword.value = '';
      formRegister.nama.value = '';
    };

    const loginHandler = async ({ email, password }) => {
      try {
        const response = await AuthDbSource.postLogin({ email, password });
        if (response.status === 200) {
          // console.log(result);
          localStorage.setItem('email', response.data.data.email);
          localStorage.setItem('image', response.data.data.image);
          localStorage.setItem('role', response.data.data.id_role);
          localStorage.setItem('token', response.data.data.token);
          localStorage.setItem('refreshToken', response.data.data.refreshToken);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `${response.data.message}`,
            confirmButtonColor: '#005555',
          }).then((result) => {
            if (result.isConfirmed) {
              window.history.replaceState('', '', '#/beranda');
              window.dispatchEvent(new HashChangeEvent('hashchange'));
            }
          });
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            console.log(error.response);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.response.data.message}`,
            });
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something Wrong',
            });
          }
        }
      }
    };
    document.querySelector('#submitLogin').addEventListener('click', async (e) => {
      e.preventDefault();
      if (inputEmailLogin.value !== '' && inputPasswordLogin.value !== '') {
        await loginHandler({ email: inputEmailLogin.value, password: inputPasswordLogin.value });
        inputEmailLogin.value = '';
        inputPasswordLogin.value = '';
      } else {
        inputEmailLogin.value.length < 1 && inputEmailLogin.classList.add('danger');
        inputPasswordLogin.value.length < 1 && inputPasswordLogin.classList.add('danger');
      }
    });
    document.querySelector('#submitRegister').addEventListener('click', async (e) => {
      e.preventDefault();
      if (formRegister.email.value !== '' && formRegister.alamat.value !== '' && formRegister.no_telp.value !== ''
      && formRegister.password.value !== '' && formRegister.nama.value !== '' && formRegister.confirmPassword.value !== '') {
        if (formRegister.password.value !== formRegister.confirmPassword.value) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password Doesn\'t match',
          });
          formRegister.password.classList.add('danger');
          formRegister.confirmPassword.classList.add('danger');
          return;
        }

        await registerHandler(formRegister);
      } else {
        formRegister.nama.value < 1 && formRegister.nama.classList.add('danger');
        formRegister.email.value < 1 && formRegister.email.classList.add('danger');
        formRegister.password.value < 1 && formRegister.password.classList.add('danger');
        formRegister.alamat.value < 1 && formRegister.alamat.classList.add('danger');
        formRegister.no_telp.value < 1 && formRegister.no_telp.classList.add('danger');
        formRegister.confirmPassword.value < 1 && formRegister.confirmPassword.classList.add('danger');
      }
    });
  },
};

export default Auth;
