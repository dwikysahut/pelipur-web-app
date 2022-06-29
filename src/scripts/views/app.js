/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-routes';
import routes from '../routes/routes';
import NotFound from './pages/not-found';

import OpenChatInitiator from '../utils/open-chat-initiator';
import GoTopInitiator from '../utils/go-top-initiator';

class App {
  constructor({
    button, chatButton, goTopButton, chatContainer, drawer, content, footer, navList,
  }) {
    this._button = button;
    this._chatButton = chatButton;
    this._goTopButton = goTopButton;
    this._chatContainer = chatContainer;
    this._drawer = drawer;
    this._content = content;
    this._footer = footer;
    this._navList = navList;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      navList: this._navList,
    });
    OpenChatInitiator.init({
      button: this._chatButton,
      chatContainer: this._chatContainer,
      content: this._content,
    });
    GoTopInitiator.init({
      goTopButton: this._goTopButton,
      body: document.body,
      documentElement: document.documentElement,

    });
  }

  async renderPage() {
    this._chatButtonRenderInit();

    const url = UrlParser.parseActiveUrlWithCombiner();
    let page = routes[url.page];
    page = this._notFoundCheck(page);

    window.scrollTo(0, 0);
    const { footer, content } = await page.render();
    !footer ? this._footer.style.display = 'none' : this._footer.style.display = 'flex';
    this._content.innerHTML = content;
    await page.afterRender();

    this._skipToLinkInit();
  }

  _chatButtonRenderInit() {
    if (localStorage.getItem('token') != null) {
      this._chatButton.style.opacity = '1';
      this._chatButton.removeAttribute('disabled');
      this._chatButton.style.display = 'block';
    }
  }

  _skipToLinkInit() {
    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }

  _notFoundCheck(page) {
    if (page === undefined) {
      return NotFound;
    }
    return page;
  }
}

export default App;
