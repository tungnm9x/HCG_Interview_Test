import { Injectable } from '@angular/core';
import { PokemonService } from '@core/services/pokemon.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import {
  loadPokemons,
  loadPokemonsFailure,
  loadPokemonsSuccess,
} from './home.actions';
import { Pokemon, PokemonDetail, PokemonListResponse } from './home.model';

@Injectable()
export class HomeEffects {
  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemons),
      switchMap((_) =>
        this.pokemonService.getList({}, { offset: 0, limit: 10 }).pipe(
          map((res: PokemonListResponse) => res.results),
          switchMap((results: Pokemon[]) => {
            const arrObs: Observable<PokemonDetail>[] = results.map((p) =>
              this.pokemonService.getDetails(p.name)
            );
            return forkJoin(arrObs);
          }),
          map((results: PokemonDetail[]) =>
            loadPokemonsSuccess({ items: results })
          ),
          catchError(() =>
            of(loadPokemonsFailure({ error: 'Load Pokemon Failue' }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
