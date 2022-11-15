import { Injectable } from '@angular/core';
import { PaginationEvent } from '@core/models/filter.model';
import { ItemService } from '@core/services/item.service';
import { PokemonService } from '@core/services/pokemon.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import {
  loadItems,
  loadItemsFailure,
  loadItemsSuccess,
  loadPokemons,
  loadPokemonsFailure,
  loadPokemonsSuccess,
} from './home.actions';
import {
  GetListResponse,
  ItemDetail,
  PokemonDetail,
  ResultItem,
} from './home.model';

@Injectable()
export class HomeEffects {
  loadPokemon$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPokemons),
      switchMap((_) =>
        this.pokemonService.getList(new PaginationEvent(1, 10)).pipe(
          map((res: GetListResponse) => res.results),
          switchMap((results: ResultItem[]) => {
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

  loadItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      switchMap((_) =>
        this.itemService.getList({}, { offset: 0, limit: 10 }).pipe(
          map((res: GetListResponse) => res.results),
          switchMap((results: ResultItem[]) => {
            const arrObs: Observable<ItemDetail>[] = results.map((p) =>
              this.itemService.getDetails(p.name)
            );
            return forkJoin(arrObs);
          }),
          map((results: ItemDetail[]) => loadItemsSuccess({ items: results })),
          catchError(() => of(loadItemsFailure({ error: 'Load Item Failue' })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService,
    private itemService: ItemService
  ) {}
}
