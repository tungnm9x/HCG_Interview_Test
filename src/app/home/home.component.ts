import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { CarouselItem } from 'app/shared/carousel/carousel.component';
import { AppState } from 'app/state/app.state';
import { loadPokemons } from 'app/state/home/home.actions';
import { PokemonDetail } from 'app/state/home/home.model';
import { Status } from 'app/state/home/home.reducer';
import {
  selectAllPokemon,
  selectAllVideoUrl,
  selectErrorPokemons,
  selectStatusPokemons,
} from 'app/state/home/home.selectors';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  carouselItems$: Observable<CarouselItem[]> = this.store
    .select(selectAllVideoUrl)
    .pipe(
      map((urls) =>
        urls.map((url) => ({
          // get Id video and covert url to safeUrl
          src: this._sanitizer.bypassSecurityTrustResourceUrl(
            url.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
          ),
        }))
      )
    );

  pokemons$: Observable<PokemonDetail[]> = this.store.select(selectAllPokemon);

  loadPokemonStatus$: Observable<Status> =
    this.store.select(selectStatusPokemons);

  error$: Observable<string | null> = this.store.select(selectErrorPokemons);

  constructor(
    private _sanitizer: DomSanitizer,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadPokemons());
  }
}
