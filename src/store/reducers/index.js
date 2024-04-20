import { combineReducers } from "redux";
import pokemonReducer from "./pokemon.reducer";
import myPokemonReducer from "./my-pokemon.reducer";

export default combineReducers({
  pokemonReducer,
  myPokemonReducer,
  // userReducer
});
