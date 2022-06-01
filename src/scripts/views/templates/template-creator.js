import data from '../../../DATA.json';
import { dateConvert } from '../../utils/function-helper';

const newsTemplate = (news) => {
  let template = '';

  template += `
            <div class="card">
              <div class="card-item" tabindex="0">
              <img src="${news.thumbnail}" alt="" >
              <h3>${dateConvert(news.pubDate)}</h3>
              <h2>${news.title}</h2>
            </div>
          </div>    
    `;
  return template;
};
const chatTemplateCreator = (chat) => {
  const messageContainer = document.querySelector('.text-message');
  let chatTemplate = '';

  //     chat.map((data) => (messageContainer.innerHTML += `
  //      <div class="container-message ${data.from === '123' ? 'sender' : 'receiver'}">
  //       <span class="sender-name" >${data.from === '123' ? 'me' : 'admin'}</span>
  //       <div class="text-message ${data.from === '123' ? 'sender' : 'receiver'}">
  //         <p>$P</p>
  //       </div>

  //     </div>
  // `));
  chat.forEach((item) => {
    chatTemplate += `
      <div class="container-message ${item.from === '123' ? 'sender' : 'receiver'}">
       <span class="sender-name" >${item.from === '123' ? 'me' : 'admin'}</span>
       <div class="text-message ${item.from === '123' ? 'sender' : 'receiver'}">
         <p>${item.message}</p>
       </div>
      
     </div>
 `;
    messageContainer.innerHTML = chatTemplate;
    document.querySelector('.chat__item-container').scrollTop = messageContainer.scrollHeight;
  });
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
            <input type="submit" id="submitLogin" value="Login">
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
// eslint-disable-next-line import/prefer-default-export
export {
  newsTemplate, chatTemplateCreator, createSkeletonNewsList, createAuthTemplate,
};
