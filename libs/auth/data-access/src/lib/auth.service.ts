import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthCredentials, AuthToken } from '@eam-js/auth/api';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private readonly api: HttpClient) {}

  login(authCredentials: AuthCredentials): Observable<AuthToken> {
    return this.api.post<AuthToken>('/api/signIn', authCredentials);
  }

  logout() {
    return of(true);
  }
}
