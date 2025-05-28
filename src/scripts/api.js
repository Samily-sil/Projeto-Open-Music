export async function fetchAlbums() {
  const response = await fetch('https://openmusic-fake-api.onrender.com/api/musics');
  
  if (!response.ok) {
    console.log('Erro ao buscar os álbuns');
  }
  
  const data = await response.json();
  return data;
}
