import { createReducer, on } from '@ngrx/store';
import {
  loadItems,
  loadItemsFailure,
  loadItemsSuccess,
  loadPokemons,
  loadPokemonsFailure,
  loadPokemonsSuccess,
  selectPokemon,
} from './home.actions';
import { ItemDetail, PokemonDetail } from './home.model';

export type Status = 'init' | 'loading' | 'success' | 'error';

export interface HomeState {
  pokemons: PokemonDetail[];
  videoUrls: string[];
  status: Status;
  error: string | null;
  pokemonSelected: PokemonDetail | null;
  items: ItemDetail[];
  itemsStatus: Status;
  itemsError: string | null;
}

export const initHomeState: HomeState = {
  pokemons: [],
  videoUrls: [
    'https://youtu.be/D0zYJ1RQ-fs',
    'https://youtu.be/1roy4o4tqQM',
    'https://youtu.be/bILE5BEyhdo',
    'https://youtu.be/uBYORdr_TY8',
  ],
  status: 'init',
  error: null,
  pokemonSelected: null,
  items: [],
  itemsStatus: 'init',
  itemsError: null,
};

export const homeReducer = createReducer(
  initHomeState,
  on(loadPokemons, (state) => ({ ...state, status: 'loading' })),
  on(loadPokemonsSuccess, (state, { items }) => ({
    ...state,
    status: 'success',
    pokemons: items,
    error: null,
  })),
  on(loadPokemonsFailure, (state, { error }) => ({
    ...state,
    status: 'error',
    pokemons: [],
    error,
  })),
  on(selectPokemon, (state, { item }) => ({
    ...state,
    pokemonSelected: item,
  })),
  on(loadItems, (state) => ({ ...state, itemsStatus: 'loading' })),
  on(loadItemsSuccess, (state, { items }) => ({
    ...state,
    itemsStatus: 'success',
    items: items,
    itemsError: null,
  })),
  on(loadItemsFailure, (state, { error }) => ({
    ...state,
    itemsStatus: 'error',
    items: [],
    itemsError: error,
  }))
);
