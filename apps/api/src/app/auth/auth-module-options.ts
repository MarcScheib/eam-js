import { AuthStrategy } from './strategies';

export const AUTH_MODULE_OPTIONS = 'AUTH_MODULE_OPTIONS';

export interface AuthModuleOptions {
  strategy: AuthStrategy;
}
