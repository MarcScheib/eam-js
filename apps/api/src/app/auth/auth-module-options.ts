import { AuthStrategy } from './strategies/auth-strategy';

export interface AuthModuleOptions {
  strategy: AuthStrategy;
}
