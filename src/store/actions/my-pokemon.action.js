import axios from "axios";
import { SET_MY_POKEMON, SET_MY_POKEMON_ERROR, SET_MY_POKEMON_LOADING, SET_MY_POKEMON_SELECTED } from "../types/my-pokemon";

export const setData = (payload) => {
  return { type: SET_MY_POKEMON, payload };
};
export const setError = (payload) => {
  return { type: SET_MY_POKEMON_ERROR, payload };
};
export const setLoading = (payload) => {
  return { type: SET_MY_POKEMON_LOADING, payload };
};
export const setSelectedProduct = (payload) => {
  return { type: SET_MY_POKEMON_SELECTED, payload };
};

export const getAllMyPokemon = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/v3/pokemon/my-list`,
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then(({ data }) => {
        if (data) {
          dispatch(setData(data));
          dispatch(setLoading(false));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError("failed to get all data"));
      });
  };
};
