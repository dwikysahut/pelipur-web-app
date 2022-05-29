class AsideDashboard extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <aside id="aside">
    <div class="sidebar">
      <div class="sidebar__logo-wrapper">
        <img
          src="images/favicon.png"
          alt="Logo Pelipur"
          class="sidebar__image-profil"
        />
      </div>
      <div class="sidebar__menu" id="sidebar__menu">
        <ul class="sidebar__list">
          <li class="sidebar__item">
            <a href="#" class="sidebar__link">
              <img
                src="icons/dashboard_white_24dp.svg"
                class="sidebar__icon"
                alt="Dashboard"
              />
              <span class="sidebar__name">Dashboard</span>
            </a>
          </li>
          <li class="sidebar__item">
            <a href="#" class="sidebar__link">
              <img
                src="icons/format_list_bulleted_white_24dp.svg"
                class="sidebar__icon"
                alt="Daftar"
              />
              <span class="sidebar__name">Daftar</span>
            </a>
          </li>
          <li class="sidebar__item">
            <a href="#" class="sidebar__link">
              <img
                src="icons/account_balance_white_24dp.svg"
                class="sidebar__icon"
                alt="Mitra"
              />
              <span class="sidebar__name">Mitra</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
            `;
  }
}
customElements.define('aside-dashboard', AsideDashboard);
