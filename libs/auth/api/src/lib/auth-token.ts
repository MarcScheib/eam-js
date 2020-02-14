export interface AuthToken {
  token: string;
}

export interface AuthTokenPayload {
  id: number;
  iat: number;
  exp: number;
}
