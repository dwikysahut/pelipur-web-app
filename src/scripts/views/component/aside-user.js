class AsideUser extends HTMLElement {
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
                  src="icons/assignment_white_24dp.svg"
                  class="sidebar__icon"
                  alt="Pengumpulan"
                />
                <span class="sidebar__name">Pengumpulan</span>
              </a>
            </li>
            <li class="sidebar__item">
              <a href="#" class="sidebar__link">
                <img
                  src="icons/history_white_24dp.svg"
                  class="sidebar__icon"
                  alt="Riwayat"
                />
                <span class="sidebar__name">Riwayat</span>
              </a>
            </li>
            <li class="sidebar__item">
              <a href="#" class="sidebar__link">
                <img
                  src="icons/person_white_24dp.svg"
                  class="sidebar__icon"
                  alt="Profil"
                />
                <span class="sidebar__name">Profil</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
            `;
  }
}
customElements.define('aside-user', AsideUser);
