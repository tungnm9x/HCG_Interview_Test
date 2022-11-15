import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectHome = (state: AppState) => state.home;

export const selectAllVideoUrl = createSelector(
  selectHome,
  (state) => state.videoUrls
);
export const selectAllPokemon = createSelector(
  selectHome,
  (state) => state.pokemons
);
export const selectStatusPokemons = createSelector(
  selectHome,
  (state) => state.status
);
export const selectErrorPokemons = createSelector(
  selectHome,
  (state) => state.error
);
export const selectPokemonSelected = createSelector(
  selectHome,
  (state) => state.pokemonSelected
);

export const selectAllItem = createSelector(selectHome, (state) => state.items);
export const selectStatusItems = createSelector(
  selectHome,
  (state) => state.itemsStatus
);
export const selectErrorItems = createSelector(
  selectHome,
  (state) => state.itemsError
);
