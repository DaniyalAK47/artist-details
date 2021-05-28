import { GET_DATA } from "../actions/dataActionTypes";

const initState = {
  artistDetail: {},
};

function reducer(state = initState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        [action.payload.name]: action.payload.response,
      };
    default:
      return state;
  }
}

export default reducer;
