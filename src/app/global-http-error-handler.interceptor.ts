import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, retry, throwError, timer } from 'rxjs';

@Injectable()
export class GlobalHttpErrorHandlerInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            retry({
                count: 3,
                delay: (_, retryCount) => timer(retryCount * 1000), // first attempt 1s, 2nd in 2s, 3rd in 3s
            }),
            catchError(err => {
                console.log('Error handled by HTTP interceptor ...');
                return throwError(() => {
                    console.log('Error rethrown by HTTP interceptor');
                    return err;
                })
            })
        );
    }
}
