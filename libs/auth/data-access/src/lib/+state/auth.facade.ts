import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SignInData } from '../sign-in-data';
import { signInRedirectAction } from './auth-api.actions';
import { signInAction } from './auth-page.actions';
import { signOutAction } from './auth.action';
import { authQuery } from './auth.selectors';

@Injectable()
export class AuthFacade {
  loggedIn$ = this.store$.pipe(select(authQuery.isLoggedIn));
  loading$ = this.store$.pipe(select(authQuery.isLoading));
  error$ = this.store$.pipe(select(authQuery.getError));

  constructor(private readonly store$: Store) {}

  signIn(signInData: SignInData) {
    this.store$.dispatch(signInAction({ signInData }));
  }

  goToSignIn() {
    this.store$.dispatch(signInRedirectAction());
  }

  signOut() {
    this.store$.dispatch(signOutAction());
  }
}
