export const requestAccessToken = () => ({
  type: 'REQUEST_ACCESS_TOKEN',
});

export const receiveAccessToken = (token) => ({
  type: 'RECEIVE_ACCESS_TOKEN',
  token,
});

export const receiveAccessTokenError = () => ({
  type: 'RECEIVE_ACCESS_TOKEN_ERROR',
});

export const requestAllArtistInfo = () => ({
  type: 'REQUEST_ALL_ARTIST_INFO',
});

export const receiveArtistInfo = (artist) => ({
  type: 'RECEIVE_ARTIST_INFO',
  artist,
});

export const receiveArtistInfoError = (error) => ({
  type: 'RECEIVE_ARTIST_INFO_ERROR',
});

export const receiveArtistAlbums = (albums) => ({
  type: 'RECEIVE_ARTIST_ALBUMS',
  albums,
});

export const finishingReceivingAllArtistInfo = () => ({
  type: 'ALL_ARTIST_INFO_RECEIVED',
});

export const receiveRelatedArtist = (relatedArtists) => ({
  type: 'ALL_RELATED_ARTIST_INFO_RECEIVED',
  relatedArtists,
});
