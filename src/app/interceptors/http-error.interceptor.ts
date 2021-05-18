import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class HttpErrorInterceptor implements HttpInterceptor {
  // intercept function
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';

        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error : ${error.error.message}`;
        } else {
          errorMsg = `Error Code : ${error.status} , Message : ${error.message}`;
        }
        return throwError(errorMsg);
      })
    );
  }
}
