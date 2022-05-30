/* eslint-disable no-unused-expressions */
import Swal from 'sweetalert2';
import AuthDbSource from '../../../data/authdb-source';
import FormEventChangeHandler from '../../../utils/form-event-change-handler';

const Verify = {
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
                <p>Silahkan buka <b>email</b> anda dan masukkan <b>kode verifikasi</b></p>
                <div class="field">
                <input type="email" id="inputEmailVerif" name="inputEmailVerif" placeholder="Masukan Email Pendaftaran" required>
              </div>
                <div class="field">
                  <input type="number" id="inputCodeVerif" name="inputCodeVerif" placeholder="Masukan Kode" required>
                </div>
                
                <div class="field btn">
                  <div class="btn-layer"></div>
                    <input type="submit" id="submitVerify"  value="Verfikasi">
                </div>
              </form>
      
            </div>
          </div>
       </div>
      
      </div>
            `;
  },

  async afterRender() {
    const inputEmailVerif = document.querySelector('#inputEmailVerif');
    const inputCodeVerif = document.querySelector('#inputCodeVerif');

    FormEventChangeHandler.init({ inputEmailVerif, inputCodeVerif });

    const verifyEmail = async ({ email, kode }) => {
      try {
        const response = await AuthDbSource.postVerifyEmail(
          { email, kode },
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
              inputEmailVerif.value = '';
              inputCodeVerif.value = '';
            }
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        });
        inputEmailVerif.value = '';
        inputCodeVerif.value = '';
      }
    };

    document.querySelector('#submitVerify').addEventListener('click', (e) => {
      e.preventDefault();

      if (inputEmailVerif.value !== '' && inputCodeVerif.value !== '') {
        verifyEmail({ email: inputEmailVerif.value, kode: inputCodeVerif.value });
      } else {
        inputEmailVerif.value < 1 && inputEmailVerif.classList.add('danger');
        inputCodeVerif.value < 1 && inputCodeVerif.classList.add('danger');
      }
    });
  },
};

export default Verify;
