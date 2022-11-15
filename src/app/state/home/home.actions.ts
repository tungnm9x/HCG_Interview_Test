import { createAction, props } from '@ngrx/store';
import { ItemDetail, PokemonDetail } from './home.model';

export const loadPokemons = createAction('[Home Page] Load Pokemons');

export const loadPokemonsSuccess = createAction(
  '[Home Page] Load Pokemons Success',
  props<{ items: PokemonDetail[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Home Page] Load Pokemons Failure',
  props<{ error: string }>()
);

export const selectPokemon = createAction(
  '[Home Page] Select Pokemon',
  props<{ item: PokemonDetail }>()
);

export const loadItems = createAction('[Home Page] Load Items');

export const loadItemsSuccess = createAction(
  '[Home Page] Load Items Success',
  props<{ items: ItemDetail[] }>()
);

export const loadItemsFailure = createAction(
  '[Home Page] Load Items Failure',
  props<{ error: string }>()
);
