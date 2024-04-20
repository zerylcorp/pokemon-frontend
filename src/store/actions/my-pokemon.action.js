import axios from "axios";
import { toast } from "react-toastify";
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
export const setSelectedMyPokemon = (payload) => {
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
          setTimeout(() => {
            dispatch(setLoading(false));
          }, 2000);
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError("failed to get all data"));
      });
  };
};
export const releasePokemon = (id) => {
  return (dispatch) => {
    axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}/api/v3/pokemon/release/${id}`,
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then(({ data }) => {
        if (data) {
          const { status, message } = data;
          switch (status) {
            case "Fail":
              toast.warn(`${message}`, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                closeButton: false,

                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              break;
            default:
              toast.success(`${message}`, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                closeButton: false,

                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              setTimeout(() => {
                dispatch(getAllMyPokemon());
              }, 500);
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

export const renamePokemon = (id) => {
  return (dispatch) => {
    axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}/api/v3/pokemon/rename/${id}`,
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then(({ data }) => {
        if (data) {
          const { status, message } = data;
          switch (status) {
            case "Fail":
              toast.warn(`${message}`, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                closeButton: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              break;
            default:
              toast.success(`${message}`, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: false,
                closeButton: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              break;
          }
        }
        setTimeout(() => {
          dispatch(getAllMyPokemon());
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        dispatch(setError("failed to get all data"));
      });
  };
};
