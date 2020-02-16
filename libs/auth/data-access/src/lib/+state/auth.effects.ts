import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import {
  signInFailureAction,
  signInRedirectAction,
  signInSuccessAction,
} from './auth-api.actions';
import { signInAction } from './auth-page.actions';
import { signOutAction } from './auth.action';

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

  signInRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInRedirectAction, signOutAction),
        tap(_ => {
          this.router.navigate(['/auth/sign-in']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}
}
