import Swal from 'sweetalert2';
import AuthDbSource from '../../../data/authdb-source';
import FormEventChangeHandler from '../../../utils/form-event-change-handler';

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
                  <h2>Lupa Password</h2>
                  <p>Masukkan <b>Email</b> anda, password baru akan dikirim ke <b>Email</b> Anda</p>
                  <div class="field">
                    <input type="email" id="inputEmailForgot" name="inputEmailForgot" placeholder="Masukan Email yang Terdaftar" required>
                  </div>
                  
                  <div class="field btn">
                    <div class="btn-layer"></div>
                      <input type="submit" id="submitForgotPassword"  value="Kirim">
                  </div>
                </form>
        
              </div>
            </div>
         </div>
        
        </div>
              `;
  },

  async afterRender() {
    const inputEmailForgot = document.querySelector('#inputEmailForgot');

    FormEventChangeHandler.init({ inputEmailForgot });

    const verifyEmail = async ({ email }) => {
      try {
        const response = await AuthDbSource.postForgotPassword(
          { email },
        );
        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            confirmButtonText: 'Okay!',
            confirmButtonColor: '#005555',
            text: `${response.data.message}`,
          }).then((result) => {
            if (result.isConfirmed) {
              window.history.replaceState('', '', '#/auth');
              window.dispatchEvent(new HashChangeEvent('hashchange'));
              inputEmailForgot.value = '';
            }
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        });
        inputEmailForgot.value = '';
      }
    };

    document.querySelector('#submitForgotPassword').addEventListener('click', (e) => {
      e.preventDefault();

      if (inputEmailForgot.value !== '') {
        verifyEmail({ email: inputEmailForgot.value });
      } else {
        inputEmailForgot.value < 1 && inputEmailForgot.classList.add('danger');
      }
    });
  },

};

export default ForgotPassword;
