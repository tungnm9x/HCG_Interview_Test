import { createAction, props } from '@ngrx/store';
import { Pokemon } from './home.model';

export const loadPokemons = createAction('[Blog Page] Load Blogs');

export const loadPokemonsSuccess = createAction(
  '[Home Page] Load Pokemons Success',
  props<{ items: Pokemon[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Blog Page] Load Blogs Failure',
  props<{ error: string }>()
);
