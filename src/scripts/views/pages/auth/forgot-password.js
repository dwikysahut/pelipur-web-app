const ForgotPassword = {
  async render() {
    return `
          <div class="container">
        
          <div class="container__side">
            <img src="./images/verification.png" alt="authentication">
          </div>
    
          <div class="container__wrapper">    
           
              <div class="form-inner">
                <form action="#" class="login">
                  <h2>Verifikasi email</h2>
                  <p>Masukkan <b>Email</b> anda, password baru akan dikirim ke <b>Email</b> Anda</p>
                  <div class="field">
                    <input type="email" id="inputEmailForgot" name="inputEmailForgot" placeholder="Masukan Password Baru" required>
                  </div>
                  
                  <div class="field btn">
                    <div class="btn-layer"></div>
                      <input type="submit" id="submitForgotPassword"  value="Masuk">
                  </div>
                </form>
        
              </div>
            </div>
         </div>
        
        </div>
              `;
  },

  async afterRender() {
    const loginText = document.querySelector('.title-text .login');
    const loginForm = document.querySelector('form.login');
    const loginBtn = document.querySelector('label.login');
    const signupBtn = document.querySelector('label.signup');
    const signupLink = document.querySelector('form .signup-link a');
    // signupBtn.onclick = (() => {
    //   loginForm.style.marginLeft = '-50%';
    //   loginText.style.marginLeft = '-50%';
    // });
    // loginBtn.onclick = (() => {
    //   loginForm.style.marginLeft = '0%';
    //   loginText.style.marginLeft = '0%';
    // });
    signupLink.onclick = (() => {
      signupBtn.click();
      return false;
    });
  },
};

export default ForgotPassword;
