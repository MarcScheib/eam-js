import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApplicationError } from './application-error';

const ERROR_CACHE_SIZE = 10;

@Injectable({ providedIn: 'root' })
export class ErrorService {
  errors$ = new BehaviorSubject<ApplicationError[]>([]);

  log(error: any) {
    const applicationError = {
      timestamp: Date.now(),
      message: error.message || 'Caught an error with no message.',
      error,
    };

    console.error(applicationError);

    this.errors$.next([
      applicationError,
      ...this.errors$.value.slice(0, ERROR_CACHE_SIZE - 1),
    ]);
  }

  clearAll() {
    this.errors$.next([]);
  }
}
