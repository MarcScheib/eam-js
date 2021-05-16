import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthToken } from '@eam-js/auth/api';
import { LocalStorageService } from '@eam-js/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, filter, map, tap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import {
  signInFailureAction,
  signInRedirectAction,
  signInSuccessAction,
} from './auth-api.actions';
import { signInAction } from './auth-page.actions';
import {
  authEffectsInitAction,
  loadTokenAction,
  signOutAction,
} from './auth.action';

const TOKEN_STORAGE_KEY = 'AUTH_TOKEN';

@Injectable()
export class AuthEffects implements OnInitEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authEffectsInitAction),
      map(() => {
        const token = this.localStorage.getSavedState<AuthToken>(
          TOKEN_STORAGE_KEY
        );
        return loadTokenAction({ token });
      })
    )
  );

  signIn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signInAction),
      map(action => action.signInData),
      exhaustMap(({ username, password, keepToken }) =>
        this.authService.login({ username, password }).pipe(
          map(token => signInSuccessAction({ token, keepToken })),
          catchError(error => of(signInFailureAction({ error })))
        )
      )
    );
  });

  persistToken$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInSuccessAction),
        filter(action => action.keepToken),
        tap(action =>
          this.localStorage.setSavedState<AuthToken>(
            action.token,
            TOKEN_STORAGE_KEY
          )
        )
      ),
    { dispatch: false }
  );

  signInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInSuccessAction),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );

  signOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signOutAction),
        tap(() => this.localStorage.removeSavedState(TOKEN_STORAGE_KEY))
      ),
    { dispatch: false }
  );

  signInRedirect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(signInRedirectAction, signOutAction),
        tap(() => this.router.navigate(['/auth/sign-in']))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly localStorage: LocalStorageService
  ) {}

  ngrxOnInitEffects() {
    return authEffectsInitAction();
  }
}
