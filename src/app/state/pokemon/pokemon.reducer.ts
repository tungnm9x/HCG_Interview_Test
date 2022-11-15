import { PaginationEvent } from '@core/models/filter.model';
import { createReducer, on } from '@ngrx/store';
import { PokemonDetail } from '../home/home.model';
import { Status } from '../home/home.reducer';
import {
  loadPokemons,
  loadPokemonsFailure,
  loadPokemonsSuccess,
  searchPokemons,
  selectPokemon,
  setTotalPokemon,
} from './pokemon.actions';

export interface PokemonState {
  searchText: string;
  pagination: PaginationEvent;
  total: number;
  pokemons: PokemonDetail[];
  status: Status;
  error: string | null;
  pokemonSelected: PokemonDetail | null;
}

export const initPokemonState: PokemonState = {
  searchText: '',
  pagination: new PaginationEvent(1, 10),
  pokemons: [],
  total: 0,
  status: 'init',
  error: null,
  pokemonSelected: null,
};

export const pokemonReducer = createReducer(
  initPokemonState,
  on(loadPokemons, (state, { pagination }) => ({
    ...state,
    status: 'loading',
    pagination,
  })),
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
  on(searchPokemons, (state, { searchText }) => ({
    ...state,
    searchText,
  })),
  on(setTotalPokemon, (state, { total }) => ({
    ...state,
    total,
  }))
);
