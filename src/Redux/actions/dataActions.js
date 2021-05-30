import axios from "axios";
import {
  GET_DATA,
  API_LOADING,
  INIT,
  RESET_EVENT,
  INIT_EVENT,
} from "./dataActionTypes";

export const URL = "https://rest.bandsintown.com/artists";

export const isLoading = (status) => (dispatch) => {
  dispatch({
    type: API_LOADING,
    payload: {
      response: status,
    },
  });
};

export const init = (status) => (dispatch) => {
  dispatch({
    type: INIT,
    payload: {
      response: status,
    },
  });
};

export const initEvent = (status) => (dispatch) => {
  dispatch({
    type: INIT_EVENT,
    payload: {
      response: status,
    },
  });
};

export const resetEvent = () => (dispatch) => {
  dispatch({
    type: RESET_EVENT,
  });
};

export const getData = (params, link, query) => (dispatch) => {
  dispatch(isLoading(true));
  dispatch(resetEvent());

  var request = {};
  if (link) {
    request = {
      method: "GET",
      url: `${URL}/${params}/${link}?app_id=123123&date=${query}`,
    };
    // dispatch(resetEvent());
  } else {
    request = {
      method: "GET",
      url: `${URL}/${params}?app_id=123123`,
    };
    dispatch(initEvent(true));

    // dispatch(resetArtist());
    // dispatch(resetEvent());
  }

  return axios(request)
    .then((response) => {
      console.log(response.data, "GETTTTTTT DATAAAAAAA");
      if (link) {
        dispatch({
          type: GET_DATA,
          payload: {
            name: "getartists" + link,
            response: response.data,
          },
        });
        dispatch(initEvent(false));
      } else {
        dispatch({
          type: GET_DATA,
          payload: {
            name: "getartists",
            response: response.data,
          },
        });
        dispatch(init(false));
      }
      dispatch(isLoading(false));

      return response;
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
      dispatch({
        type: GET_DATA,
        payload: {
          name: "getartists" + link,
          response: "",
        },
      });
      dispatch(isLoading(false));
      dispatch(init(false));
    });
};
