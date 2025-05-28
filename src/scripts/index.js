import { applyInputRangeStyle } from "./inputRange.js";
import { fetchAlbums } from './api.js';
import { applyTheme } from "./theme.js";

function createAlbumCard(album) {
  const card = document.createElement("div");
  card.classList.add("album");

  card.innerHTML = `
    <img src="${album.img}" alt="${album.title}">
    <h3 class="music-name">${album.title}</h3>
    <div class="div-1">
      <p class="music-singer">${album.band}</p>
      <span class="music-style">${album.genre}</span>                  
    </div>
    <div class="div-2">
      <h3 class="price">R$ ${parseFloat(album.price).toFixed(2).replace(".", ",")}</h3>
      <button class="buy-btn">Comprar</button>                  
    </div>
  `;
  return card;
}

function renderAlbumCards(albumArray) {
  const albumContainer = document.querySelector(".albums");
  albumContainer.innerHTML = "";

  if (albumArray.length === 0) {
    albumContainer.innerHTML = "<p class='no-albums'>Nenhum álbum encontrado para esse preço.</p>";
    return;
  }

  albumArray.forEach((album) => {
    const card = createAlbumCard(album);
    albumContainer.appendChild(card);
  });
}

async function routine() {
  applyTheme();
  applyInputRangeStyle();

  const albumList = await fetchAlbums();  
  renderAlbumCards(albumList);

  setupPriceFilter(albumList);  
}

routine();

function setupPriceFilter(albumList) {
  const priceRange = document.getElementById('price-range');
  const priceValue = document.querySelector('.price-value');

  priceRange.addEventListener('input', function() {
    priceValue.textContent = `R$ ${priceRange.value}`;

    const filteredAlbums = albumList.filter(album => album.price <= Number(priceRange.value));
    renderAlbumCards(filteredAlbums);
  });
}
