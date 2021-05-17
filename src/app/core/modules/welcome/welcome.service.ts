import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';
import { ApiEndPoint, ApiMethod } from '../../utility/AppConstants';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private httpService: HttpService) {}

  saveOrUpdateUserData(
    apiMethod: ApiMethod,
    endpoint: ApiEndPoint,
    requestBody: any
  ): Observable<any> {
    return this.httpService.requestCall(apiMethod, endpoint, requestBody).pipe(
      catchError((err) => {
        console.log(err);
        return throwError(err);
      })
    );
  }
}
