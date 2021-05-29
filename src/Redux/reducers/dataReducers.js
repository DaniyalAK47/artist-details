import {
  GET_DATA,
  API_LOADING,
  INIT,
  INIT_EVENT,
} from "../actions/dataActionTypes";

const initState = {
  init: true,
  initEvent: true,
  loading: false,
  getartists: "",
  getartistsevents: "",
};

function reducer(state = initState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        [action.payload.name]: action.payload.response,
      };
    case API_LOADING:
      return {
        ...state,
        loading: action.payload.response,
      };
    case INIT:
      return {
        ...state,
        init: action.payload.response,
      };
    case INIT_EVENT:
      return {
        ...state,
        initEvent: action.payload.response,
      };
    default:
      return state;
  }
}

export default reducer;
