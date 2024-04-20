import { SET_MY_POKEMON, SET_MY_POKEMON_ERROR, SET_MY_POKEMON_LOADING, SET_MY_POKEMON_SELECTED } from "../types/my-pokemon";

const initialState = {
  error: null,
  loading: false,
  data: [],
  selected: {},
};

function myPokemonReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_MY_POKEMON:
      return { ...state, data: payload };
    case SET_MY_POKEMON_ERROR:
      return { ...state, error: payload };
    case SET_MY_POKEMON_LOADING:
      return { ...state, loading: payload };
    case SET_MY_POKEMON_SELECTED:
      return { ...state, selected: payload };
    default:
      return state;
  }
}

export default myPokemonReducer;
