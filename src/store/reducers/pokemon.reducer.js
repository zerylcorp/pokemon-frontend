import { SET_POKEMON, SET_POKEMON_ERROR, SET_POKEMON_LOADING, SET_POKEMON_SELECTED } from "../types/pokemon.type";

const initialState = {
  error: null,
  loading: false,
  data: [],
  selected: {},
};

function pokemonReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_POKEMON:
      return { ...state, data: payload };
    case SET_POKEMON_ERROR:
      return { ...state, error: payload };
    case SET_POKEMON_LOADING:
      return { ...state, loading: payload };
    case SET_POKEMON_SELECTED:
      return { ...state, selected: payload };
    default:
      return state;
  }
}

export default pokemonReducer;
