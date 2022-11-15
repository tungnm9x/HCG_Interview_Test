import { Injectable } from '@angular/core';
import { HttpService } from '@core/common/http.service';
import { API } from '@core/const/api.const';
import { GetListResponse } from '@core/models/response.model';
import { ItemDetail } from 'app/state/home/home.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpService) {}

  getList(
    filter: object = {},
    pagination: {
      offset: number;
      limit: number;
    }
  ): Observable<GetListResponse> {
    return this.http.sendToServer('GET', API.ITEM.LIST, null, null, {
      ...filter,
      ...pagination,
    });
  }

  getDetails(name: string): Observable<ItemDetail> {
    return this.http.sendToServer(
      'GET',
      API.ITEM.DETAIL.replace('{name}', name)
    );
  }
}
