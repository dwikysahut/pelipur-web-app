class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="header">
      <div class="header__inner">
       <h1 class="header__inner__title">Pelipur</h1>
      </div>
      <div class="menu-toggle">
        <button id="hamburger" class="btn-drawer" tabindex="0">☰</button>
      </div>
      <nav id="drawer" class="nav">
        <ul class="nav__list">
          <li class="nav__item"><a href="#/home">Beranda</a></li>
          <li class="nav__item">
            <a href="#/about-us">Tentang Kami</a>
          </li>

          <li class="nav__item"><a href="#/bisnis">Bisnis</a>
          <ul tabindex="0" class="sub-menu">
              <li tabindex="0"><a href="#">Info Bisnis</a></li>
            </ul>
          </li>
          </li>
          ${!localStorage.getItem('token') ? '<li tabindex="0" class="nav__item"><a class="active" href="#/auth">MASUK</a></li>'
    : `         <a href="#/${localStorage.getItem('role') == 2 ? 'user-collection' : 'collections'}">
    <div class="profile-pict">
      <img src="https://ui-avatars.com/api/?name=John+Doe" alt="">
      <i class="fal fa-chevron-circle-down"></i>
    </div>
  </a>
`
}
          

          
          
        </ul>
      </nav>
    </header>
        `;
  }
}
customElements.define('custom-header', Header);
