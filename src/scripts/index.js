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
import './views/component/chat-button';
import './views/component/footer';
import './views/component/live-chat';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('button'),
  chatButton: document.querySelector('#btnOpenChat'),
  goTopButton: document.querySelector('#btnGoTop'),
  chatContainer: document.querySelector('#chatContainer'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
  footer: document.querySelector('custom-footer'),
  navList: document.querySelector('.nav__list'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  AOS.init();
  app.renderPage();

  swRegister();
});
