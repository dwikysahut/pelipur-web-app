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
    if (url.splitedUrl.resource === 'aboutus') {
      document.querySelector('.header').style.display = 'none';
    } else {
      document.querySelector('.header').style.display = 'static';
      document.querySelector('main').scrollTop = document.querySelector('body').scrollHeight;
    }
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
