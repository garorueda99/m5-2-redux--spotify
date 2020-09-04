const initialState = {
  currentArtist: null,
  status: 'idlle',
};

export default function artistReducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
