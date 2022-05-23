import data from '../../../DATA.json';

let news = '';
data.restaurants.forEach((berita) => {
  news += `

 
            <div class="card">
              <div class="card-item" tabindex="0">
              <img src="${berita.pictureId}" alt="" >
              <h4>${berita.city}</h4>
              <h3>${berita.rating}</h3>
              <h2>${berita.name}</h2>
            </div>
          </div>    
    
    `;
});

document.querySelector('.item-produk').innerHTML = news;
