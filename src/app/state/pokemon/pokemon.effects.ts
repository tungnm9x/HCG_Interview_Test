import { Injectable } from '@angular/core';
import { GetListResponse } from '@core/models/response.model';
import { PokemonService } from '@core/services/pokemon.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { AppState } from '../app.state';
import { PokemonDetail } from '../home/home.model';
import {
  loadPokemons,
  loadPokemonsFailure,
  loadPokemonsSuccess,
  setTotalPokemon,
} from './pokemon.actions';

@Injectable()
export class PokemonEffects {
  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemons),
      switchMap((action) =>
        this.pokemonService.getList(action.pagination).pipe(
          switchMap((res: GetListResponse) => {
            this.store.dispatch(
              setTotalPokemon({
                total: Math.round(res.count / action.pagination.pageSize),
              })
            );

            const arrObs: Observable<PokemonDetail>[] = res.results.map((p) =>
              this.pokemonService.getDetails(p.name)
            );
            return forkJoin(arrObs);
          }),
          map((items: PokemonDetail[]) => loadPokemonsSuccess({ items })),
          catchError(() =>
            of(loadPokemonsFailure({ error: 'Load Pokemon Failue' }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,
    private store: Store<AppState>
  ) {}
}
