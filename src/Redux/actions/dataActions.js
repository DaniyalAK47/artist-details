import axios from "axios";
import { GET_DATA } from "./dataActionTypes";

export const URL = "https://rest.bandsintown.com";

export const getData = (link, params) => (dispatch) => {
  var request = {};
  request = {
    method: "GET",
    url: `${URL}/${link}?app_id=123123&date=${params}`,
  };

  return axios(request)
    .then((response) => {
      console.log(response.data, "GETTTTTTT DATAAAAAAA");
      dispatch({
        type: GET_DATA,
        payload: {
          name: "get" + link,
          response: response.data,
        },
      });
      return response;
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
};
