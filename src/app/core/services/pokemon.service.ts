import { Injectable } from '@angular/core';
import { HttpService } from '@core/common/http.service';
import { API } from '@core/const/api.const';
import { PaginationEvent } from '@core/models/filter.model';
import { GetListResponse, PokemonDetail } from 'app/state/home/home.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpService) {}

  getList(pagination: PaginationEvent): Observable<GetListResponse> {
    return this.http.sendToServer('GET', API.POKEMON.LIST, null, null, {
      offset: pagination.offset,
      limit: pagination.limit,
    });
  }

  getDetails(pokemonName: string): Observable<PokemonDetail> {
    return this.http.sendToServer(
      'GET',
      API.POKEMON.DETAIL.replace('{name}', pokemonName)
    );
  }
}
