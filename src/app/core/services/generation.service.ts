import { Injectable } from '@angular/core';
import { HttpService } from '@core/common/http.service';
import { API } from '@core/const/api.const';
import { GetListResponse } from '@core/models/response.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenerationService {
  constructor(private http: HttpService) {}

  getAll(): Observable<GetListResponse> {
    return this.http.sendToServer('GET', API.GENERATION.LIST, null, null, {
      offset: 0,
      limit: 1000,
    });
  }
}
