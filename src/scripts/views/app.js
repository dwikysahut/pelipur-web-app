/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-routes';
import routes from '../routes/routes';
import NotFound from './pages/not-found';

import OpenChatInitiator from '../utils/OpenChatInitiator';

class App {
  constructor({ button, chatButton, chatContainer, drawer, content }) {
    this._button = button;
    this._chatButton = chatButton;
    this._chatContainer = chatContainer;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    OpenChatInitiator.init({
      button: this._chatButton,
      chatContainer: this._chatContainer,
      content: this._content,
    });
  }

  async renderPage() {
    if (localStorage.getItem('token') == null) {
      this._chatButton.style.opacity = '0';
      this._chatButton.setAttribute('disabled', 'true');
    }
    const url = UrlParser.parseActiveUrlWithCombiner();
    let page = routes[url.page];
    console.log(page);
    if (page === undefined) {
      page = NotFound;
    }
    console.log(url.splitedUrl);
    document.querySelector('custom-footer').style.display = 'block';
    this._content.innerHTML = await page.render();
    window.scrollTo(0, 0);
    await page.afterRender();
    this._skipToLinkInit();
  }

  _skipToLinkInit() {
    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
