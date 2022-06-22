/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import './views/component/header';
import './views/component/footer';
import './views/component/live-chat';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
// lazyiload
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

//
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('button'),
  chatButton: document.querySelector('#btnOpenChat'),
  chatContainer: document.querySelector('#chatContainer'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  AOS.init();
  app.renderPage();

  swRegister();
});
