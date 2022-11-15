import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaginationEvent } from '@core/models/filter.model';
import { Store } from '@ngrx/store';
import { AppState } from 'app/state/app.state';
import { PokemonDetail } from 'app/state/home/home.model';
import { Status } from 'app/state/home/home.reducer';

import {
  loadPokemons,
  searchPokemons,
  selectPokemon,
} from 'app/state/pokemon/pokemon.actions';
import {
  selectErrorPokemons,
  selectPaginationPokemon,
  selectPokemonFiltered,
  selectPokemonSelected,
  selectStatusPokemons,
  selectTotalPokemon,
} from 'app/state/pokemon/pokemon.selectors';
import { combineLatest, debounceTime, Observable, take } from 'rxjs';

@Component({
  selector: 'nmt-pokemon-list',
  templateUrl: './pokemon-list.component.html',
})
export class PokemonListComponent implements OnInit {
  // pokemon
  pokemons$: Observable<PokemonDetail[]> = this.store.select(
    selectPokemonFiltered
  );

  loadPokemonStatus$: Observable<Status> =
    this.store.select(selectStatusPokemons);

  error$: Observable<string | null> = this.store.select(selectErrorPokemons);

  vm$ = combineLatest([
    this.store.select(selectTotalPokemon),
    this.store.select(selectPaginationPokemon),
  ]);

  pokemonSelected$ = this.store.select(selectPokemonSelected);

  // states which no need store
  isVisible = false;
  formControl = new FormControl('');

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let page = 1,
        pageSize = 20;

      // detect limit
      if (Number(params['limit']) >= 0) {
        pageSize = Number(params['limit']);
      }

      // detect offset
      if (Number(params['offset']) >= 0) {
        page = Math.round(Number(params['offset']) / pageSize) + 1;
      }

      // detect query
      if (params['name']) {
        this.formControl.setValue(params['name']);
        this.store.dispatch(searchPokemons({ searchText: params['name'] }));
      }

      this.loadPokemonStatus$.pipe(take(1)).subscribe((status) => {
        if (status !== 'success') {
          this.store.dispatch(
            loadPokemons({ pagination: new PaginationEvent(page, pageSize) })
          );
        }
      });
    });

    this.formControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((val: string | null) =>
        this.store.dispatch(searchPokemons({ searchText: val || '' }))
      );
  }

  showDetail(pokemon: PokemonDetail) {
    this.isVisible = true;
    this.store.dispatch(selectPokemon({ item: pokemon }));
  }

  refresh() {
    this.store.dispatch(
      loadPokemons({ pagination: new PaginationEvent(1, 20) })
    );
  }

  pageChange(pagination: PaginationEvent) {
    this.store.dispatch(loadPokemons({ pagination }));
  }

  trackByFn(index: number, item: PokemonDetail) {
    return item.id;
  }
}
