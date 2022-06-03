import '../../component/aside-dashboard';

const Collection = {
  async render() {
    return `
    <div class="wrapper-dashboard">
    <aside-dashboard></aside-dashboard>
    
    <div class="dashboard-container">
    <div class="content">
    <h2 class="content__title">Daftar</h2>
    <div class="content__table">
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
              <select id="partner" name="partner">
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
  </div>

         
          `;
  },

  async afterRender() {},
};

export default Collection;
