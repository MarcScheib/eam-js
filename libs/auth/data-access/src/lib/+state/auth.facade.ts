import { Injectable } from '@angular/core';
import { AuthCredentials } from '@eam-js/auth/api';
import { Store } from '@ngrx/store';
import { signInAction } from './auth-page.actions';

@Injectable()
export class AuthFacade {
  constructor(private store$: Store<{}>) {}

  signIn(credentials: AuthCredentials) {
    this.store$.dispatch(signInAction({ credentials }));
  }
}
