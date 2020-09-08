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
