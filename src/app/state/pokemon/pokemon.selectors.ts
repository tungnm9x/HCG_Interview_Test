import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectPokemon = (state: AppState) => state.pokemon;

export const selectAllPokemon = createSelector(
  selectPokemon,
  (state) => state.pokemons
);
export const selectStatusPokemons = createSelector(
  selectPokemon,
  (state) => state.status
);
export const selectErrorPokemons = createSelector(
  selectPokemon,
  (state) => state.error
);
export const selectPokemonSelected = createSelector(
  selectPokemon,
  (state) => state.pokemonSelected
);
export const selectPokemonFiltered = createSelector(selectPokemon, (state) =>
  state.pokemons.filter((pokemon) =>
    pokemon.name
      .toLocaleLowerCase()
      .includes(state.searchText.toLocaleLowerCase())
  )
);

export const selectTotalPokemon = createSelector(
  selectPokemon,
  (state) => state.total
);

export const selectPaginationPokemon = createSelector(
  selectPokemon,
  (state) => state.pagination
);
