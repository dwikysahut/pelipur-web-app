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

          <li class="nav__item"><a href="#/bisnis">Bisnis</a> </li>
          ${
  !localStorage.getItem('token')
    ? '<li tabindex="0" class="nav__item"><a class="active" href="#/auth">MASUK</a></li>'
    : `<li tabindex="0" class="nav__item dropdown">
    
        <div class="profile-pict">
             <img src="${localStorage.getItem('image')}" alt="">
              <div class="header-icon">
                <i class="fa fa-sort-desc"></i>
              </div>
          </div>
          <div class="dropdown-content">
          <a href="#/${localStorage.getItem('role').toString() === '2' ? 'user-collection' : 'collections'}">Dashboard</a>
          <a href="#/logout">Logout</a>
          </div>

        
    </li>
          </ul>
        
        
   
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
