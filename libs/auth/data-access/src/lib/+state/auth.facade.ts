import { Injectable } from '@angular/core';
import { AuthCredentials } from '@eam-js/auth/api';
import { select, Store } from '@ngrx/store';
import { signInRedirectAction } from './auth-api.actions';
import { signInAction } from './auth-page.actions';
import { signOutAction } from './auth.action';
import { authQuery } from './auth.selectors';

@Injectable()
export class AuthFacade {
  loading$ = this.store$.pipe(select(authQuery.isLoading));
  error$ = this.store$.pipe(select(authQuery.getError));

  constructor(private readonly store$: Store<{}>) {}

  signIn(credentials: AuthCredentials) {
    this.store$.dispatch(signInAction({ credentials }));
  }

  goToSignIn() {
    this.store$.dispatch(signInRedirectAction());
  }

  signOut() {
    this.store$.dispatch(signOutAction());
  }
}
