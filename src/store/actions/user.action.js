import axios from "axios";
import { toast } from "react-toastify";
import { getAllMyPokemon } from "./my-pokemon.action";

export const loginUser = (user) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/api/v3/user/login`,
      data: user,
    })
      .then(({ data }) => {
        if (data) {
          const { status, access_token } = data;
          localStorage.setItem("access_token", access_token);
          toast.success(`${status}`, {
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
          dispatch(getAllMyPokemon());
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
