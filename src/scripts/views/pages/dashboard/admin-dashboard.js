import '../../component/aside-dashboard';

const Collection = {
  async render() {
    return `
    <div class="wrapper-dashboard">
      <aside-dashboard></aside-dashboard>
      <div class="dashboard-container">
        <div class="content">
          <h2 class="content__title">Dashboard</h2>
          <div class="content__card">
            <div class="card__item">
              <div class="card__detail">
                <h3 class="card__number">1000</h3>
                <span class="card__name">User</span>
              </div>
              <div class="card__icon">
                <img src="icons/person_white_36dp.svg" alt="User" />
              </div>
            </div>
            <div class="card__item">
              <div class="card__detail">
                <h3 class="card__number">1000</h3>
                <span class="card__name">Total Minyak</span>
              </div>
              <div class="card__icon">
                <img
                  src="icons/format_list_bulleted_white_36dp.svg"
                  alt="Daftar"
                />
              </div>
            </div>
            <div class="card__item">
              <div class="card__detail">
                <h3 class="card__number">1000</h3>
                <span class="card__name">Kota</span>
              </div>
              <div class="card__icon">
                <img src="icons/room_white_36dp.svg" alt="Kota" />
              </div>
            </div>
            <div class="card__item">
              <div class="card__detail">
                <h3 class="card__number">1000</h3>
                <span class="card__name">Mitra</span>
              </div>
              <div class="card__icon">
                <img src="icons/account_balance_white_36dp.svg" alt="Mitral" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  },

  async afterRender() {},
};

export default Collection;
