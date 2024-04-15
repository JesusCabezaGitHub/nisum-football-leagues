import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';

import { catchError, throwError } from 'rxjs';

import { environment } from '../../environments/environment';

export const footballApiInterceptor: HttpInterceptorFn = (req, next) => {
  let clonedRequest = req.clone({
    setHeaders: {
      'x-rapidapi-host': environment.API_HOST,
      'x-rapidapi-key': environment.API_KEY
    } 
  })
  return next(clonedRequest).pipe(catchError(handleErrorResponse)) ;
};

function handleErrorResponse(error: HttpErrorResponse) {
  return throwError(() => `Ha ocurrido un error: ${error.message}` );
}
