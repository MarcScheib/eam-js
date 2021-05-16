import * as ActiveDirectory from 'activedirectory';
import { AuthStrategy } from './auth-strategy';

export interface LdapAuthOptions {
  baseDN: string;
  url: string;
  username: string;
  password: string;
}

export class LdapAuthStrategy implements AuthStrategy {
  constructor(private readonly options: LdapAuthOptions) {}

  authenticate(username: string, password: string): Promise<boolean> {
    const rootUser = `root\\${username}`;

    const ad = new ActiveDirectory(this.options);
    return new Promise((resolve, reject) => {
      ad.authenticate(rootUser, password, function (err, auth) {
        if (err) {
          reject(err);
        } else {
          resolve(auth);
        }
      });
    });
  }
}
