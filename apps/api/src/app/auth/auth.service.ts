import { AuthToken, AuthTokenPayload } from '@eam-js/auth/api';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { AuthModuleOptions } from './auth-module-options';
import { AUTH_MODULE_OPTIONS } from './auth.constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    @Inject(AUTH_MODULE_OPTIONS) private readonly options: AuthModuleOptions
  ) {}

  async authenticate(username: string, password: string): Promise<boolean> {
    return this.options.strategy.authenticate(username, password);
  }

  async retrieveUser(username: string): Promise<UserEntity> {
    const user = await this.usersService.getUserByName(username);
    if (user) {
      return user;
    }
    return await this.usersService.create({ name: username });
  }

  async signIn(username: string, password: string): Promise<AuthToken> {
    const authenticated = await this.authenticate(username, password);
    if (authenticated) {
      const user = await this.retrieveUser(username);
      const payload: Partial<AuthTokenPayload> = { id: user.id };
      const token = this.jwtService.sign(payload);
      return { token };
    }
    throw new UnauthorizedException();
  }

  async validateUser(payload: AuthTokenPayload): Promise<UserEntity> {
    return await this.usersService.getUser(payload.id);
  }
}
