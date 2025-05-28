export async function fetchAlbums() {
  const response = await fetch('https://openmusic-fake-api.onrender.com/api/musics');
  
  if (!response.ok) {
    throw new Error('Erro ao buscar os álbuns');
  }
  
  const data = await response.json();
  return data;
}
