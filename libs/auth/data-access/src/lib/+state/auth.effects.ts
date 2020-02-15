import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { signInAction } from './auth-page.actions';

@Injectable()
export class AuthEffects {
  signIn$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(signInAction),
        map(action => {
          console.log(action);
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
