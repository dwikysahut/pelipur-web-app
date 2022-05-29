import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/submenu.css';
import '../scripts/views/templates/template-creator';
import './views/component/header';
import './views/component/footer';
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
