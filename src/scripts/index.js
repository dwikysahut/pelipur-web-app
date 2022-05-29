import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/aside.css';
import '../styles/responsive.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/submenu.css';
import './views/component/header';

import App from './views/app';

const app = new App({
  button: document.querySelector('button'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
