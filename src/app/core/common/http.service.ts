import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public sendToServer(
    method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
    api: string,
    bd?: any,
    hd?: any,
    pr?: any
  ): Observable<any> {
    let url = environment.endPoint + api;
    let ret: Observable<any> = of(null);
    let body = bd || {};
    let header = hd || { 'Content-Type': 'application/json' };

    if (pr)
      Object.keys(pr).forEach((element) => {
        if (
          pr[element] === '' ||
          typeof pr[element] == 'undefined' ||
          pr[element] == null
        ) {
          delete pr[element];
        }
      });
    const params = new HttpParams({ fromObject: pr });
    switch (method) {
      case 'GET':
        ret = this.http.get(url, {
          headers: header,
          observe: 'body',
          params: params,
        });
        break;
      case 'POST':
        ret = this.http.post(url, body, {
          headers: header,
          observe: 'body',
          params: params,
        });
        break;
      case 'PATCH':
        ret = this.http.patch(url, body, {
          headers: header,
          observe: 'body',
          params: params,
        });
        break;
      case 'PUT':
        ret = this.http.put(url, body, {
          headers: header,
          observe: 'body',
          params: params,
        });
        break;
      case 'DELETE':
        ret = this.http.delete(url, {
          headers: header,
          observe: 'body',
          params: params,
        });
        break;
      default:
        break;
    }
    return ret;
  }
}
