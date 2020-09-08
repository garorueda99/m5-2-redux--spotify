export async function fetchArtistProfile(token, artistId) {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = `https://api.spotify.com/v1/artists/${artistId}`;
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.log('FETCHING ARTIST ERROR', err));
  return response;
}

export async function fetchArtistTopTracks(token, artistId) {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=CA`;
  const response = await fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.log('FETCHING ALBUM ERROR', err));
  return response;
}
