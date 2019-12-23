export interface AuthStrategy {
  authenticate(username: string, password: string): Promise<boolean>;
}
