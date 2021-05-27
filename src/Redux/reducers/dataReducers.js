const initState = {
  artistDetail: {},
};

function reducer(state = initState, action) {
  switch (action.type) {
    case "SET_ARTIST_DETAIL":
      return {
        ...state,
        artistDetail: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
