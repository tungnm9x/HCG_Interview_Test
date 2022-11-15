import { Injectable } from '@angular/core';
import { HttpService } from '@core/common/http.service';
import { API } from '@core/const/api.const';
import { GetListResponse, PokemonDetail } from 'app/state/home/home.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpService) {}

  getList(
    filter: object = {},
    pagination: {
      offset: number;
      limit: number;
    }
  ): Observable<GetListResponse> {
    return this.http.sendToServer('GET', API.POKEMON.LIST, null, null, {
      ...filter,
      ...pagination,
    });
  }

  getDetails(pokemonName: string): Observable<PokemonDetail> {
    return this.http.sendToServer(
      'GET',
      API.POKEMON.DETAIL.replace('{name}', pokemonName)
    );
  }
}
