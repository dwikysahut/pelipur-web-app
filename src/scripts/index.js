import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menuToggel = document.querySelector('.menu-toggle button');
const drawerelement = document.querySelector('#drawer');
menuToggel.addEventListener('click', function () {
  drawerelement.classList.toggle('slide');
});

console.log('Hello Coders! :)');
