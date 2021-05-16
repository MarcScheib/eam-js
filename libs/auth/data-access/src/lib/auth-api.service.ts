import { Injectable } from '@angular/core';
import { AuthApi, AuthCredentialsDto, AuthTokenDto } from '@eam-js/auth/api';
import { RESTClient } from '@eam-js/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthApiService extends AuthApi {
  constructor(private readonly api: RESTClient) {
    super();
  }

  signIn(authCredentials: AuthCredentialsDto): Observable<AuthTokenDto> {
    return this.api.post<AuthTokenDto>(super.signInEndpoint, authCredentials);
  }
}
