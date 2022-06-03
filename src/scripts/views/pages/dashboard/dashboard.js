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
    <div class="content__table">
      <div class="table__item">
        <h4>Total Minyak Terkumpul</h4>
        <button>Selengkapnya</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>ID User</th>
            <th>Total Minyak</th>
            <th class="th__space">Pesan</th>
            <th class="th__space">Alamat</th>
            <th>Mitra</th>
            <th class="btn__space">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>26/05/2022</td>
            <td>1</td>
            <td>10 Liter</td>
            <td>Ambil dirumah pukul 12.00 - 15.00</td>
            <td>Jln. Marga Sari 01 Depok</td>
            <td>
              <select id="city" name="city">
                <option value="mitra1">Mitra 1</option>
                <option value="mitra2">Mitra 2</option>
                <option value="mitra3">Mitra 3</option>
                <option value="mitra4">Mitra 4</option>
              </select>
            </td>
            <td>
              <div class="btn confirm">
                <button class="btn__save">Terima</button>
                <button class="btn__delete">Tolak</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>27/05/2022</td>
            <td>2</td>
            <td>10 Liter</td>
            <td>
              Ambil dirumah pukul 12.00 - 15.00 Ambil dirumah pukul 12.00
              - 15.00
            </td>
            <td>Jln. Pahlawan 02 Malang</td>
            <td>
              <select id="city" name="city">
                <option value="mitra1">Mitra 1</option>
                <option value="mitra2">Mitra 2</option>
                <option value="mitra3">Mitra 3</option>
                <option value="mitra4">Mitra 4</option>
              </select>
            </td>
            <td>
              <div class="btn">
                <button class="btn__save">Terima</button>
                <button class="btn__delete">Tolak</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>26/05/2022</td>
            <td>3</td>
            <td>10 Liter</td>
            <td>Ambil dirumah pukul 12.00 - 15.00</td>
            <td>Jln. Kenanga 03 Semarang</td>
            <td>
              <select id="city" name="city">
                <option value="mitra1">Mitra 1</option>
                <option value="mitra2">Mitra 2</option>
                <option value="mitra3">Mitra 3</option>
                <option value="mitra4">Mitra 4</option>
              </select>
            </td>
            <td>
              <div class="btn">
                <button class="btn__save">Terima</button>
                <button class="btn__delete">Tolak</button>
              </div>
            </td>
          </tr>
          <tr>
            <td>26/05/2022</td>
            <td>4</td>
            <td>10 Liter</td>
            <td>Ambil dirumah pukul 12.00 - 15.00</td>
            <td>Jln. Cerita 04 Tangerang</td>
            <td>
              <select id="city" name="city">
                <option value="mitra1">Mitra 1</option>
                <option value="mitra2">Mitra 2</option>
                <option value="mitra3">Mitra 3</option>
                <option value="mitra4">Mitra 4</option>
              </select>
            </td>
            <td>
              <div class="btn">
                <button class="btn__save">Terima</button>
                <button class="btn__delete">Tolak</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>

         
          `;
  },

  async afterRender() {},
};

export default Collection;
