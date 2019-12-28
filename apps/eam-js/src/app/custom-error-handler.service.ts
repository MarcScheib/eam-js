import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorService } from './error.service';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private readonly injector: Injector) {}

  handleError(error: any) {
    const router = this.injector.get(Router);
    const errorService = this.injector.get(ErrorService);

    if (!(error instanceof HttpErrorResponse)) {
      errorService.log(error);
      router.navigate(['error']);
    }
  }
}
