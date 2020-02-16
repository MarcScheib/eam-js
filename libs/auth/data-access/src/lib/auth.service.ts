import { Injectable } from '@angular/core';
import { AuthCredentials, AuthToken } from '@eam-js/auth/api';
import { RESTClient } from '@eam-js/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly api: RESTClient) {}

  login(authCredentials: AuthCredentials): Observable<AuthToken> {
    return this.api.post<AuthToken>('auth/signIn', authCredentials);
  }

  logout() {
    return of(true);
  }
}
