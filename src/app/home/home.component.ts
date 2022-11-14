import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from '@core/common/http.service';
import { CarouselItem } from 'app/shared/carousel/carousel.component';
import { map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  urls = [
    'https://youtu.be/D0zYJ1RQ-fs',
    'https://youtu.be/1roy4o4tqQM',
    'https://youtu.be/bILE5BEyhdo',
    'https://youtu.be/uBYORdr_TY8',
  ];

  carouselItems: CarouselItem[] = [];

  _pokemonResponse$ = this.http
    .sendToServer('GET', '/pokemon', null, null, {
      limit: 10,
      offset: 0,
    })
    .pipe(shareReplay());

  pokemons$ = this._pokemonResponse$.pipe(map((res) => res.results));

  constructor(private _sanitizer: DomSanitizer, private http: HttpService) {}

  ngOnInit(): void {
    // covert url to https://www.youtube.com/embed/ + videoID
    this.carouselItems = this.urls.map((url) => ({
      // using safeUrl
      src: this._sanitizer.bypassSecurityTrustResourceUrl(
        url.replace('https://youtu.be/', 'https://www.youtube.com/embed/')
      ),
    }));
  }
}
