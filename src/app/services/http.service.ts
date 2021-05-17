import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndPoint, ApiMethod } from '../core/utility/AppConstants';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  requestCall(
    apiMethod: ApiMethod,
    apiEndpoint: ApiEndPoint,
    data?: any,
    options?: any
  ): Observable<any> {
    let response!: Observable<any>;
    const homeApi = 'http://localhost:9080';

    switch (apiMethod) {
      case ApiMethod.GET:
        response = this.httpClient.get(homeApi + apiEndpoint, data);
        break;
      case ApiMethod.POST:
        response = this.httpClient.post(homeApi + apiEndpoint, data, options);
        break;
      case ApiMethod.PUT:
        response = this.httpClient.put(homeApi + apiEndpoint, data, options);
        break;
      case ApiMethod.DELETE:
        response = this.httpClient.delete(homeApi + apiEndpoint, options);
        break;
      default:
        break;
    }

    return response;
  }
}
