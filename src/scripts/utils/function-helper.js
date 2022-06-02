/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import Swal from 'sweetalert2';

const validateEmail = (email) => String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

const formEmailValidation = (input, element) => {
  if (!validateEmail(input.value)) {
    document.querySelector(element).style.display = 'block';
    input.classList.add('danger');
    return false;
  }
  document.querySelector(element).style.display = 'none';
  input.classList.remove('danger');
  return true;
};
const passwordValidation = (inputElement, alertElemet) => {
  if (inputElement.value.length < 8 || inputElement.value.length > 12) {
    inputElement.classList.add('danger');
    document.querySelector(alertElemet).style.display = 'block';
    return false;
  }
  document.querySelector('#alertPassReg').style.display = 'none';
  inputElement.classList.remove('danger');
  return true;
};

const swalConfirm = (message, path, currentPage = '') => {
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

const emptyFormHandler = (...elements) => {
  elements.map((element) => element.value.length < 1 && element.classList.add('danger'));
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

export {
  validateEmail, swalConfirm, swalError, emptyFormHandler,
  formEmailValidation, passwordValidation, dateConvert,
  resetFormValue, zeroValueHandler,
};
