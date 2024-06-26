import axios from "axios";
import { toast } from "react-toastify";
import { SET_POKEMON, SET_POKEMON_ERROR, SET_POKEMON_LOADING, SET_POKEMON_SELECTED } from "../types/pokemon.type";

export const setData = (payload) => {
  return { type: SET_POKEMON, payload };
};
export const setError = (payload) => {
  return { type: SET_POKEMON_ERROR, payload };
};
export const setLoading = (payload) => {
  return { type: SET_POKEMON_LOADING, payload };
};
export const setSelectedPokemon = (payload) => {
  return { type: SET_POKEMON_SELECTED, payload };
};

export const allPokemon = ({ limit, offset }) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/v3/pokemon?limit=${limit}&offset=${offset}`,
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
export const detailsPokemon = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    dispatch(setError(null));
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}/api/v3/pokemon/detail/${id}`,
    })
      .then(({ data }) => {
        if (data) {
          dispatch(setSelectedPokemon(data.data));
          dispatch(setLoading(false));
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError("failed to get all data"));
      });
  };
};
export const catchPokemon = (id) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/v3/pokemon/catch?pokemonId=${id}`,
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then(({ data }) => {
        if (data) {
          const { status, message } = data;
          switch (status) {
            case "Fail":
              toast.warn(`${message}`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                closeButton: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              break;
            default:
              toast.success(`${message}`, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                closeButton: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError("failed to get all data"));
      });
  };
};
