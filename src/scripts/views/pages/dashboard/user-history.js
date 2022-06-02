import '../../component/aside-user';

const UserHistory = {
  async render() {
    return `
    <div class="wrapper-dashboard">
      <aside-user></aside-user>
    
      <div class="dashboard-container">
        <div class="content">
          <h2 class="content__title">Riwayat</h2>
          <div class="content__table">
            <table>
              <thead>
                <tr>
                  <th>Tanggal</th>
                  <th>Estimasi Waktu</th>
                  <th>Total Minyak</th>
                  <th class="th__space">Pesan</th>
                  <th class="th__space">Alamat Tujuan</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>26/05/2022</td>
                  <td>10:20</td>
                  <td>10 Liter</td>
                  <td>Ambil dirumah pukul 12.00 - 15.00</td>
                  <td>Jln. Marga Sari 01 Depok</td>
                  <td><span class="status success">Berhasil</span></td>
                <tr>
                  <td>27/05/2022</td>
                  <td>13:00</td>
                  <td>20 Liter</td>
                  <td>Ambil dirumah pukul 12.00 - 15.00</td>
                  <td>Jln. Marga Sari 01 Depok</td>
                  <td><span class="status taken">Diambil</span></td>
                <tr>
                  <td>26/05/2022</td>
                  <td>14:30</td>
                  <td>10 Liter</td>
                  <td>Ambil dirumah pukul 12.00 - 15.00</td>
                  <td>Jln. Marga Sari 01 Depok</td>
                  <td><span class="status success">Berhasil</span></td>
                </tr>
                <tr>
                  <td>26/05/2022</td>
                  <td>13:30</td>
                  <td>15 Liter</td>
                  <td>Ambil dirumah pukul 12.00 - 15.00</td>
                  <td>Jln. Marga Sari 01 Depok</td>
                  <td><span class="status rejected">Ditolak</span></td>
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

export default UserHistory;