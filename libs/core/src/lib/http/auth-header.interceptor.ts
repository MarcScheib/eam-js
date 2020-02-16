import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // TODO: add credentials
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Basic ' + btoa(`TODO`)),
    });
    return next.handle(clonedRequest);
  }
}
