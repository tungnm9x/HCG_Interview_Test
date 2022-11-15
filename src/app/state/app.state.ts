import { homeReducer, HomeState } from './home/home.reducer';
import { pokemonReducer, PokemonState } from './pokemon/pokemon.reducer';

export interface AppState {
  home: HomeState;
  pokemon: PokemonState;
}

export const appReducer = {
  home: homeReducer,
  pokemon: pokemonReducer,
};
