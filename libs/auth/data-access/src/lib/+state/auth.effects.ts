import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { signInFailureAction, signInSuccessAction } from './auth-api.actions';
import { signInAction } from './auth-page.actions';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInAction),
      map(action => action.credentials),
      exhaustMap(authCredentials =>
        this.authService.login(authCredentials).pipe(
          map(token => signInSuccessAction({ token })),
          catchError(error => of(signInFailureAction({ error })))
        )
      )
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService
  ) {}
}
