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
