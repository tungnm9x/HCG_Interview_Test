import { PaginationEvent } from '@core/models/filter.model';
import { createAction, props } from '@ngrx/store';
import { PokemonDetail } from '../home/home.model';

export const loadPokemons = createAction(
  '[Pokemon List Page] Load Pokemons',
  props<{
    pagination: PaginationEvent;
  }>()
);

export const loadPokemonsSuccess = createAction(
  '[Pokemon List Page] Load Pokemons Success',
  props<{ items: PokemonDetail[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Pokemon List Page] Load Pokemons Failure',
  props<{ error: string }>()
);

export const selectPokemon = createAction(
  '[Pokemon List Page] Select Pokemon',
  props<{ item: PokemonDetail }>()
);

export const searchPokemons = createAction(
  '[Pokemon List Page] Search Pokemons',
  props<{
    searchText: string;
  }>()
);

export const setTotalPokemon = createAction(
  '[Pokemon List Page] Set Total',
  props<{
    total: number;
  }>()
);
