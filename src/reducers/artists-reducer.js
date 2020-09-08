const initialState = {
  currentArtist: null,
  currentArtistAlbums: null,
  status: 'idle',
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ARTIST_INFO':
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
        status: 'completed',
        currentArtistAlbums: action.albums,
      };
    default: {
      return state;
    }
  }
}
