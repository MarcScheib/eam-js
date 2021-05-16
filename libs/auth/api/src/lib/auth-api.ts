export class AuthApi {
  static BASE = 'auth';
  static SIGN_IN = 'sign-in';

  get signInEndpoint() {
    return `${AuthApi.BASE}/${AuthApi.SIGN_IN}`;
  }
}
