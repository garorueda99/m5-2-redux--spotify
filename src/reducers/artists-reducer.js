const initialState = {
  currentArtist: null,
  currentArtistAlbums: null,
  related: null,
  status: 'idle',
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ALL_ARTIST_INFO':
      return {
        ...state,
        status: 'loading',
      };
    case 'RECEIVE_ARTIST_INFO':
      return {
        ...state,
        currentArtist: action.artist,
        status: 'idle',
      };
    case 'RECEIVE_ARTIST_INFO_ERROR':
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    case 'RECEIVE_ARTIST_ALBUMS':
      return {
        ...state,
        status: 'idle',
        currentArtistAlbums: action.albums,
      };
    case 'ALL_ARTIST_INFO_RECEIVED':
      return {
        ...state,
        status: 'loaded',
      };
    case 'ALL_RELATED_ARTIST_INFO_RECEIVED':
      return {
        ...state,
        related: action.relatedArtists,
      };
    default: {
      return state;
    }
  }
}
