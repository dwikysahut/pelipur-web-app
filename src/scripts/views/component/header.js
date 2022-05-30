class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
      <div class="header__inner">
       <h1 class="header__inner__title">Pelipur</h1>
       <h4>Pengelolaan Limbah Ramah Lingkungan</h4>
      </div>
      <div class="menu-toggle">
        <button class="btn-drawer" tabindex="0">☰</button>
      </div>
      <nav id="drawer" class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/beranda">Beranda</a></li>
          <li class="nav__item">
            <a href="#/aboutus">Tentang Kami</a>
          </li>

          <li class="nav__item"><a href="#/bisnis">Bisnis</a>
          <ul tabindex="0" class="sub-menu">
              <li tabindex="0"><a href="#">Info Bisnis</a></li>
            </ul>
          </li>
          </li>
          <li tabindex="0" class="nav__item"><a class="active" href="#/auth">MASUK</a></li>
          
        </ul>
      </nav>
    </header>
        `;
  }
}
customElements.define('custom-header', Header);
