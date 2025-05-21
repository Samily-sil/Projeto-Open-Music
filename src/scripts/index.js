import { applyInputRangeStyle } from "./inputRange.js";
import { albumList } from "./albumsDatabase.js";

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

  albumArray.forEach((album) => {
    const card = createAlbumCard(album);
    albumContainer.appendChild(card);
  });
}

function routine() {
  applyInputRangeStyle();
  renderAlbumCards(albumList)
}

routine();
