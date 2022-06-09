/* eslint-disable no-empty-function */
import '../../component/aside-dashboard';

const Partner = {
  async render() {
    return `
    <div class="wrapper-dashboard">
      <aside-dashboard></aside-dashboard>
      <div class="dashboard-container">
        <div class="content">
          <h2 class="content__title">Mitra</h2>
          <form class="content__form" id="content_form">
            <div class="content__form-item list">
              <label for="name">Nama</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="content__form-item list">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="content__form-item list__date">
              <label for="number">Tanggal Bergabung</label>
              <input type="date" required />
            </div>
            <div class="content__form-item">
              <label for="detail">Jangkauan Kota</label>
              <div class="multi-select">
                <div class="select-box">
                  <select id="selectDisplay" class="form-select" aria-label="Default select example">
                    <option></option>
                  </select>
                  <div class="overSelect"></div>
                </div>
                <div id="checkBoxes">
                  <label for="one">
                    <input class="cb" type="checkbox" id="one" value="jakarta" />First checkbox</label>
                  <label for="two">
                    <input class="cb" type="checkbox" id="two" value="bogor" />Second checkbox</label>
                  <label for="three">
                    <input class="cb" type="checkbox" id="three" value="3" />Third checkbox</label>
                </div>
             </div>
            </div>
            <div class="content__form-item">
              <label for="address">Alamat</label>
              <textarea
                name="address"
                id="address"
                cols="15"
                rows="2"
                required
              ></textarea>
            </div>
            <div class="content__form-item-img">
              <label for="img">Pilih Gambar</label>
              <input type="file" id="img" name="img" accept="image/*">
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
          <h2 class="content__title list">Daftar Mitra</h2>
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
                  <th>Aksi</th>
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
                    <div class="btn__action">
                      <button class="btn__accept">
                        <img
                          src="icons/done_white_18dp.svg"
                          alt="Terima"
                        />
                      </button>
                      <button class="btn__reject"><img
                        src="icons/close_white_18dp.svg"
                        alt="Tolak"
                      /></button>
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
                    <div class="btn__action">
                      <button class="btn__accept">
                        <img
                          src="icons/done_white_18dp.svg"
                          alt="Terima"
                        />
                      </button>
                      <button class="btn__reject"><img
                        src="icons/close_white_18dp.svg"
                        alt="Tolak"
                      /></button>
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
                    <div class="btn__action">
                      <button class="btn__accept">
                        <img
                          src="icons/done_white_18dp.svg"
                          alt="Terima"
                        />
                      </button>
                      <button class="btn__reject"><img
                        src="icons/close_white_18dp.svg"
                        alt="Tolak"
                      /></button>
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
                    <div class="btn__action">
                      <button class="btn__accept">
                        <img
                          src="icons/done_white_18dp.svg"
                          alt="Terima"
                        />
                      </button>
                      <button class="btn__reject"><img
                        src="icons/close_white_18dp.svg"
                        alt="Tolak"
                      /></button>
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

  async afterRender() {
    let expanded = false;

    const showCheckboxes = () => {
      const checkboxes = document.getElementById('checkBoxes');
      if (!expanded) {
        checkboxes.style.display = 'block';
        checkboxes.style.opacity = '1';
        expanded = true;
      } else {
        checkboxes.style.display = 'none';
        checkboxes.style.opacity = '0';
        expanded = false;
      }
    };

    const selectBox = document.querySelector('.select-box');
    selectBox.addEventListener('click', showCheckboxes);
    const cbs = document.querySelectorAll('.cb');
    const selectDisplay = document.querySelector('#selectDisplay');
    const selectText = selectDisplay.firstElementChild;
    cbs.forEach((cb) => {
      console.log(selectText)
      cb.addEventListener('change', (e) => {
        if (e.target.checked) {
          if (selectText.innerHTML === '') {
            selectText.innerHTML += e.target.value;
          } else {
            selectText.innerHTML += `,${e.target.value}`;
          }
        } else {
          console.log('non koma');
          selectText.innerHTML = selectText.innerHTML.toString()
            .replace(`${e.target.value}`, '');
          selectText.innerHTML = selectText.innerHTML.toString()
            .replace(/^,|,$/g, '');
          selectText.innerHTML = selectText.innerHTML.toString()
            .replace(/,+/g, ',');
        }
        console.log(JSON.stringify(selectText.innerHTML.toString().split(',')));
      });
    });
  },
};

export default Partner;
