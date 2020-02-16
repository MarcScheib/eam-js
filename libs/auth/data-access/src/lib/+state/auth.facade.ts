import { Injectable } from '@angular/core';
import { AuthCredentials } from '@eam-js/auth/api';
import { select, Store } from '@ngrx/store';
import { signInAction } from './auth-page.actions';
import { authQuery } from './auth.selectors';

@Injectable()
export class AuthFacade {
  loading$ = this.store$.pipe(select(authQuery.isLoading));
  error$ = this.store$.pipe(select(authQuery.getError));

  constructor(private readonly store$: Store<{}>) {}

  signIn(credentials: AuthCredentials) {
    this.store$.dispatch(signInAction({ credentials }));
  }
}
