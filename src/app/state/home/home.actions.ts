import { createAction, props } from '@ngrx/store';
import { PokemonDetail } from './home.model';

export const loadPokemons = createAction('[Home Page] Load Pokemons');

export const loadPokemonsSuccess = createAction(
  '[Home Page] Load Pokemons Success',
  props<{ items: PokemonDetail[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Home Page] Load Pokemons Failure',
  props<{ error: string }>()
);
