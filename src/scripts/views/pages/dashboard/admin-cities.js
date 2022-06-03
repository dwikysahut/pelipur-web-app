import '../../component/aside-dashboard';

const CityList = {
  async render() {
    return `
    <div class="wrapper-dashboard">
      <aside-dashboard></aside-dashboard>
      <div class="dashboard-container">
        <div class="content">
          <h2 class="content__title">Kota</h2>
          <form class="content__form" id="content_form">
            <div class="content__form-item list">
              <label for="name">Nama Kota</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="btn__form">
              <button type="submit" value="Submit" class="btn__save">
                Simpan
              </button>
              <button type="submit" value="Submit" class="btn__update">
                Edit
              </button>
              <button type="submit" value="Submit" class="btn__delete">
                Hapus
              </button>
            </div>
          </form>
          <h2 class="content__title list">Kota</h2>
          <div class="content__table-cities">
            <table>
              <thead>
                <tr>
                  <th>ID Kota</th>
                  <th>Nama Kota</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bekasi</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Bogor</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Depok</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jakarta</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Tangerang</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>       
    `;
  },

  async afterRender() {},
};

export default CityList;
