/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import Swal from 'sweetalert2';
import CONSTANT from '../globals/constant';

const validateEmail = (email) => String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
const validatePhone = (email) => String(email)
  .toLowerCase()
  .match(
    /^[0-9]*$/,
  );
const formEmailValidation = (input, element) => {
  if (!validateEmail(input.value)) {
    element.style.display = 'block';
    input.classList.add('danger');
    return false;
  }
  element.style.display = 'none';
  input.classList.remove('danger');
  return true;
};

const formPhoneValidation = (input, element) => {
  if (!validatePhone(input.value)) {
    element.style.display = 'block';
    input.classList.add('danger');
    return false;
  }
  element.style.display = 'none';
  input.classList.remove('danger');
  return true;
};
const passwordValidation = (inputElement, alertElemet) => {
  if (inputElement.value.length < 8 || inputElement.value.length > 12) {
    inputElement.classList.add('danger');
    alertElemet.style.display = 'block';
    return false;
  }
  alertElemet.style.display = 'none';
  inputElement.classList.remove('danger');
  return true;
};

const swalConfirm = (message, path = '', currentPage = '') => {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
    confirmButtonColor: '#005555',
  }).then((result) => {
    if (result.isConfirmed) {
      if (path !== '') {
        if (currentPage === 'login') {
          window.history.replaceState({ page: 'login' }, null, path);
          window.dispatchEvent(new HashChangeEvent('hashchange'));
        } else {
          window.location.href = path;
        }
        // window.dispatchEvent(new HashChangeEvent('hashchange'));
      }
    } else if (currentPage === 'login') {
      window.history.replaceState({ page: 'login' }, null, path);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    } else {
      window.history.replaceState('', '', path);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  });
};
const swalConfirmation = (message, messageAfter, action) => {
  Swal.fire({
    title: 'Apakah Anda Yakin ?',
    text: `${message}`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya',
    cancelButtonText: 'Batal',
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  });
};

const swalError = (message, path = '') => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: `${message}`,
  }).then(() => {
    if (path !== '') {
      window.history.replaceState('', '', path);
      window.dispatchEvent(new HashChangeEvent('hashchange'));
    }
  });
};
const errorFetch = async (errorMessage, actionRefreshToken = null) => {
  if (errorMessage === CONSTANT.NO_ACCESS) {
    window.history.replaceState('', '', '#/unauthorized');
    window.dispatchEvent(new HashChangeEvent('hashchange'));
  } else if (errorMessage === CONSTANT.TOKEN_ERROR) {
    swalError('Please Login First', '#/auth');
  } else if (errorMessage === CONSTANT.TOKEN_EXPIRED) {
    await actionRefreshToken(localStorage.getItem('refreshToken'));
  } else {
    // swalError('Oops.. Something Wrong', '');
  }
};

const emptyFormHandler = (...elements) => {
  elements.map((element) => element.value.length < 1 && element.classList.add('danger'));
};
const emptyFileHandler = (...elements) => {
  elements.map((element) => element.files.length < 1 && element.classList.add('danger'));
};
const zeroValueHandler = (...elements) => {
  elements.map((element) => element.value < 1 && element.classList.add('danger'));
};
const resetFormValue = (elements) => {
  for (const keys in elements) {
    elements[keys].value = '';
  }
};

const dateConvert = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()
  }/${newDate.getMonth() + 1
  }/${newDate.getFullYear()
  } ${newDate.getHours()
  }:${newDate.getMinutes()
  }`;
};
const closeLoader = (element) => {
  element.style.display = 'none';
};

const openLoader = (element) => {
  element.style.display = 'flex';
};

export {
  validateEmail, swalConfirm, swalError, emptyFormHandler,
  formEmailValidation, passwordValidation, dateConvert,
  resetFormValue, zeroValueHandler, swalConfirmation, openLoader,
  closeLoader, emptyFileHandler, formPhoneValidation, errorFetch,
};
