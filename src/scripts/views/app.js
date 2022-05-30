/* eslint-disable class-methods-use-this */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-routes';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
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
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url.page];
    console.log(url.splitedUrl);
    this._content.innerHTML = await page.render();
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
