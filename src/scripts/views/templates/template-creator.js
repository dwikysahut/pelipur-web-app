/* eslint-disable no-param-reassign */
// import data from '../../../DATA.json';
import CONFIG from '../../globals/config';

import { dateConvert } from '../../utils/function-helper';

const newsTemplate = (news, att) => {
  let template = '';

  template += `
            <div ${att} class="card">
              <div class="card-item" tabindex="0">
              <div class="img-news" tabindex="0">
              <img src="${news.urlToImage}" alt="" >
              </div>
             <h4>${dateConvert(news.publishedAt)}</h4>
             <a href="${news.url}" target="_blank"><h3>${news.title}</h3></a>
            </div>
          </div>    
    `;
  return template;
};
const emptyTableTemplate = () => `
  <tr >
  <td class="empty-table" colspan="100%"><h4>Data kosong</h4></td>
</tr>
  `;
const tableCollectionsTemplate = (item) => {
  const date = new Date(item.tanggal);
  return `
  <tr>
  <td>${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${item.waktu}</td>
  <td>${item.id}</td>
  <td><a href="#/user-detail/${item.id_user}">${item.email_user}</a></td>
  <td>${item.nama_user}</td>
  <td>${item.phone_user}</td>
  <td>${item.total_minyak} Liter</td>
  <td>${item.pesan}</td>
  <td>${item.alamat}</td>
  <td>${item.kota}</td>

  <td>
  ${item.id_status === 1 ? `<button class="btn btn-outline-dark generate" data-id="${item.id}" data-kota="${item.id_kota}">Pilih mitra</button>`
    : `${item.nama_mitra === null ? '-' : item.nama_mitra}`
}
    <select id="partnersDropdown" name="partnersDropdown" class="partnersDropdown none" data-id="${item.id}">   

    </select>
    <loader-content></loader-content>
    
  </td>
  <td>
  <div class="btn__action" >
    
    </div>
  </td>
</tr>
`;
};
const userListChat = (users, container) => {
  let userTemplate = '';

  users.forEach((user) => {
    userTemplate += `
    <div class="user-list__item ${user.lastSender === user.id ? 'unread' : ''}" data-id="${user.id}">
    <span>${user.id}</span>
        <p>${user.email}</p>
       
    </div>
    `;
  });
  container.innerHTML = userTemplate;
};
const chatTemplateCreator = (chat, currentId) => {
  const messageContainer = document.querySelector('.text-message');
  messageContainer.innerHTML = '';

  let chatTemplate = '';
  const container = document.querySelector('.chat__item-container');

  chat.forEach((item) => {
    chatTemplate += `
      <div class="container-message ${item.from === currentId ? 'sender' : 'receiver'}">
       <span class="sender-name" >${item.from === currentId ? 'me' : 'admin'}</span>
       <div class="text-message ${item.from === currentId ? 'sender' : 'receiver'}">
         <p>${item.message}</p>
       </div>
      
     </div>
 `;
  });
  messageContainer.innerHTML = chatTemplate;
  container.scrollTop = messageContainer.scrollHeight;
};
const chatTemplateAdminCreator = (chat, currentId) => {
  const messageContainer = document.querySelector('.text-message');

  let chatTemplate = '';
  const container = document.querySelector('.chat__item-admin');

  chat.forEach((item) => {
    chatTemplate += `
      <div class="container-message ${item.from === currentId ? 'sender' : 'receiver'}">
       <span class="sender-name" >${item.from === currentId ? 'me' : 'user'}</span>
       <div class="text-message ${item.from === currentId ? 'sender' : 'receiver'}">
         <p>${item.message}</p>
       </div>
      
     </div>
 `;

    // messageContainer.lastChild.scrollIntoView(false);
  });
  messageContainer.innerHTML = chatTemplate;
  container.scrollTop = messageContainer.scrollHeight;
};

const createSkeletonNewsList = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="wrapper-news">
    <div class="wrapper-news__item">
      <div class="item-news__image">
        <img src="" alt="" srcset="./images/placeholder.png">
      </div>
      <div class="item-news__content">
        <h3>
          Title
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, velit!</p>
        <div class="item-news__footer">
          <span class="footer__date">
            null
          </span>
          <a href="http://"> <span>null</span></a>
         
        </div>
      </div>
    </div>
  </div>
    `;
  }
  return template;
};

const createAuthTemplate = () => ` <div class="container">
<div class="container__side">
  <img src="./images/auth.png" alt="authentication">
</div>

<div class="container__wrapper">    
  <div class="container__wrapper-form">
    <div class="slide-controls">
      <input type="radio" name="slide" id="login" checked>
      <input type="radio" name="slide" id="signup">
      <label for="login" class="slide login">Masuk</label>
      <label for="signup" class="slide signup">Daftar</label>
      <div class="slider-tab"></div>
    </div>
    
    <div class="form-inner">
      <form class="login">
        <h2>Masuk</h2>
        <p>Belum punya akun? <a href="" id="linkSignUp" class="link-daftar">Daftar Sekarang</a></p>
      
        <div class="field">
          <input type="email"  id="inputEmailLogin" name="inputEmailLogin" placeholder="Masukan Email" required>
          <span id="alertEmailLogin" class="hint danger">error please enter a valid email</span> 
        </div>
        <div class="field">
          <input type="password" id="inputPasswordLogin" name="inputPasswordLogin" placeholder="Masukan Password" required>
        </div> <br>
        <div class="remember">
          <input type="checkbox" name="rememberme" id="rememberme"> Ingatkan Saya 
          <a href="#/forgot-password" class="pass-link">Lupa password?</a>
        </div>
        
        <div class="field btn">
          <div class="btn-layer"></div>
            <input type="submit" id="submitLogin" value="Masuk">
        </div>
      </form>
    
      <form action="#" class="signup">
        <h2>Daftar</h2>
        <div class="field">
        <input type="text"  id="inputNameReg" name="inputNameReg" placeholder="Masukkan Nama" required>
      </div>
        <div class="field">
          <input type="email" id="inputEmailReg" name="inputEmailReg" placeholder="Masukkan Email" required>
          <span id="alertEmailReg" class="hint danger">error please enter a valid email</span> 
        </div>
        <div class="field">
          <input type="tel" id="inputPhoneReg" name="inputPhoneReg" placeholder="Masukkan Nomor Telepon" required>
        </div>
        <div class="field">
        <input type="textarea" id="inputAddressReg" name="inputAddressReg" placeholder="Masukkan Alamat" required>
      </div>
        <div class="field">
          <input type="password" id="inputPasswordReg" name="inputPasswordReg" placeholder="Masukan Password" required>
          <span id="alertPassReg" class="hint danger">password must be 8-12 characters in length</span> 
        </div>
        <div class="field">
          <input type="password" id="inputRePasswordReg" name="inputRePasswordReg" placeholder="Konfirmasi password" required>
        </div>
        <div class="field btn">
          <div class="btn-layer"></div>
          <input type="submit" id="submitRegister" value="Daftar">
        </div>

      </form>
    </div>
  </div>
</div>
</div>`;

const cityItemTemplate = (item) => ` <option value="${item.id}">${item.kota}</option>`;

const categoryItemTemplate = (item, recentId) => {
  if (recentId === item.id) {
    return `<option value="${item.id}" selected>${item.keterangan}</option>`;
  }

  return ` <option value="${item.id}">${item.keterangan}</option>`;
};

const partnerByCityItemTemplate = (item) => ` <option value="${item.id}">${item.nama}</option>`;

const partnerByCityEmptyTemplate = () => ' <option value="" selected>-</option>';

const dataDashboardTemplate = (data) => `

<div tabindex="0" class="card__item">
  <div class="card__detail">
    <h3 class="card__number">${data.total_user}</h3>
    <span class="card__name">User</span>
  </div>
  <div class="card__icon">
    <img src="icons/person_white_36dp.svg" alt="User" />
  </div>
</div>
<div tabindex="0" class="card__item">
  <div class="card__detail">
    <h3 class="card__number">${data.total_minyak} L</h3>
    <span class="card__name">Total Minyak</span>
  </div>
  <div class="card__icon">
    <img
      src="icons/format_list_bulleted_white_36dp.svg"
      alt="Daftar"
    />
  </div>
</div>
<div tabindex="0" class="card__item">
  <div class="card__detail">
    <h3 class="card__number">${data.total_kota}</h3>
    <span class="card__name">Kota</span>
  </div>
  <div class="card__icon">
    <img src="icons/pin_drop_white_36dp.svg" alt="Kota" />
  </div>
</div>
<div tabindex="0" class="card__item">
  <div class="card__detail">
    <h3 class="card__number">${data.total_mitra}</h3>
    <span class="card__name">Mitra</span>
  </div>
  <div class="card__icon">
    <img src="icons/account_balance_white_36dp.svg" alt="Mitra" />
  </div>
</div>
<div tabindex="0" class="card__item">
  <div class="card__detail">
    <h3 class="card__number">${data.total_pengumpulan}</h3>
    <span class="card__name">Form Terkumpul</span>
  </div>
  <div class="card__icon">
    <img src="icons/assignment_white_36dp.svg" alt="Form Terkumpul" />
  </div>
</div>
`;
const userDetailItemTemplate = (item) => `
<div class="content__inner__row">
  <p class="row-text">Nama</p>
  <p class="row-data">${item.nama}</p>
</div>
<div class="content__inner__row">
  <p class="row-text">Email</p>
  <p class="row-data">${item.email}</p>
</div>
<div class="content__inner__row">
  <p class="row-text">Alamat</p>
  <p class="row-data">${item.alamat}</p>
</div>
<div class="content__inner__row">
  <p class="row-text">No. Telepon</p>
  <p class="row-data">${item.no_telp}</p>
</div>
<div class="content__inner__row">
  <p class="row-text">Keterangan</p>
  <p class="row-data">${item.keterangan}</p>
</div>
  `;
const buttonSuspendTemplate = (id) => `
  <div class="content__inner__row">
    <div></div>
    <button id="suspendBtn" data-id=${id} class="btn btn-danger"><i class="fa fa-ban" aria-hidden="true"></i> Suspend</div>
  </div>
    `;
const buttonUnSuspendTemplate = (id) => `
  <div class="content__inner__row">
  <div></div>
    <button id="suspendBtn" data-id=${id} class="btn btn-outline-danger"><i class="fa fa-ban" aria-hidden="true"></i> Unsuspend</div>
  </div>
    `;

const tableHistoryTemplate = (item) => {
  const date = new Date(item.tanggal);
  return `
<tr class="data">
  <td>${date.getDate()}/${date.getMonth()}/${date.getFullYear()}</td>
  <td>${item.id}</td>
  <td>${item.waktu}</td>
  <td>${item.total_minyak}</td>
  <td>${item.pesan}</td>
  <td>${item.kota}</td>
  <td>${item.alamat}</td>
  
</tr>
`;
};

const tableCityTemplate = (item) => `   <tr id ="city-${item.id}">
  <td>${item.id}</td>
  <td>${item.kota}</td>
  <td>  
  <div class="btn__action">
    <button type="submit" value="Submit" class="btn__update city" data-id =${item.id}>
      Edit
    </button>
    <button type="submit" value="Submit" class="btn__delete city" data-id =${item.id}>
      Hapus
    </button>
</div>
</td>
</tr>
  `;
const tablePartnerTemplate = (item) => `
  <tr>
        <td>${item.id}</td>
        <td>${item.nama}</td>
        <td>${item.alamat}</td>
        <td>${item.email}</td>
        <td><img class="img-partner" src="${CONFIG.BASE_IMAGE_URL}${item.image}" data-src="${CONFIG.BASE_IMAGE_URL}${item.image}" data-alt="logo ${item.nama}"></img></td>
        <td>${JSON.parse(item.kota_jangkauan).toString()}</td>
        <td>  
         <div class="btn__action">
            <button type="submit" value="Submit" class="btn__update partner" data-id =${item.id}>
              Edit
            </button>
            <button type="submit" value="Submit" class="btn__delete partner" data-id =${item.id}>
              Hapus
            </button>
          </div>
        </td>  
        
  </tr>

<div class="modal">
<span class="close">&times;</span>
<img class="modal-content" >
<div class="partner-caption"></div>
</div>
  `;

const skeletonNewsHomeTemplate = () => {
  let template = '';

  for (let i = 0; i < 6; i += 1) {
    template += `
              <div class="card">
                <div class="card-item" tabindex="0">
                  <div class="img-news" tabindex="0">
                    <img srcset="./images/placeholder.png" alt="">
                  </div>
                  <h4>0/0/0000 0:0</h4>
                  <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                </div>
              </div>    
      `;
  }
  return template;
};
const dropdownCityCheckBoxTemplate = (item) => `<label for="city-${item.kota}">
  <input class="cb" type="checkbox" id="city-${item.kota}" value="${item.kota}" />${item.kota}</label>
`;

const mitraListTemplate = (data) => ` <li><img src="${CONFIG.BASE_IMAGE_URL}${data.image}" alt=""></li>`;
// eslint-disable-next-line import/prefer-default-export
export {
  newsTemplate, chatTemplateCreator, createSkeletonNewsList, createAuthTemplate,
  cityItemTemplate, tableCollectionsTemplate, dataDashboardTemplate,
  categoryItemTemplate, tableHistoryTemplate, partnerByCityItemTemplate, partnerByCityEmptyTemplate,
  tableCityTemplate, mitraListTemplate, skeletonNewsHomeTemplate, tablePartnerTemplate,
  dropdownCityCheckBoxTemplate, userListChat, chatTemplateAdminCreator, userDetailItemTemplate,
  buttonSuspendTemplate, buttonUnSuspendTemplate, emptyTableTemplate,
};
