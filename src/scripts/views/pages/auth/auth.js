/* eslint-disable no-unused-expressions */
import Swal from 'sweetalert2';
import AuthDbSource from '../../../data/authdb-source';
import SliderButtonLoginPresenter from '../../../utils/slider-button-login-presenter';
import { createAuthTemplate } from '../../templates/template-creator';

const Auth = {
  async render() {
    return `
      ${createAuthTemplate()}
     
          `;
  },

  async afterRender() {
    const loginText = document.querySelector('.title-text .login');
    const loginForm = document.querySelector('form.login');
    const loginBtn = document.querySelector('label.login');
    const signupBtn = document.querySelector('label.signup');
    const signupLink = document.querySelector('form .signup-link a');
    const linkSignUp = document.querySelector('#linkSignUp');

    const inputEmail = document.querySelector('#inputEmailLogin');
    const inputPassword = document.querySelector('#inputPasswordLogin');

    SliderButtonLoginPresenter.init({
      loginText, loginForm, loginBtn, signupBtn, signupLink, linkSignUp,
    });

    inputEmail.addEventListener('keyup', (e) => {
      (e.target.value.length > 0 && inputEmail.classList.remove('danger'));
    });
    inputPassword.addEventListener('keyup', (e) => {
      (e.target.value.length > 0) && inputPassword.classList.remove('danger');
    });

    const registerHandler = async () => {

    };

    const loginHandler = async ({ email, password }) => {
      try {
        const result = await AuthDbSource.postLogin({ email, password });
        if (result.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Sukses',
            text: `${result.data.message}`,
          });
          console.log(result);
          localStorage.setItem('email', result.data.data.email);
          localStorage.setItem('image', result.data.data.image);
          localStorage.setItem('role', result.data.data.id_role);
          localStorage.setItem('token', result.data.data.token);
          localStorage.setItem('refreshToken', result.data.data.refreshToken);
          window.history.pushState('/');
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

      if (inputEmail.value !== '' && inputPassword.value !== '') {
        await loginHandler({ email: inputEmail.value, password: inputPassword.value });
        inputEmail.value = '';
        inputPassword.value = '';
      } else {
        inputEmail.value.length < 1 && inputEmail.classList.add('danger');
        inputPassword.value.length < 1 && inputPassword.classList.add('danger');
      }
    });
  },
};

export default Auth;
