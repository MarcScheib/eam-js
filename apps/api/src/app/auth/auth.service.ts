import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { AuthModuleOptions } from './auth-module-options';
import { AUTH_MODULE_OPTIONS } from './auth.constants';

export interface AuthContext {
  expiresIn: number;
  accessToken: string;
}

export interface TokenPayload {
  id: number;
  username: string;
}

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
    const user = await this.usersService.getUser(username);
    if (user) {
      return user;
    }
    return await this.usersService.create({ name: username });
  }

  async signIn(username: string, password: string): Promise<AuthContext> {
    const authenticated: boolean = await this.authenticate(username, password);
    if (authenticated) {
      const user = await this.retrieveUser(username);
      const payload: TokenPayload = { id: user.id, username: user.name };
      const accessToken = this.jwtService.sign(payload);
      return {
        expiresIn: 3600,
        accessToken,
      };
    }
    throw new UnauthorizedException();
  }

  async validateUser(payload: TokenPayload): Promise<UserEntity> {
    return await this.usersService.getUser(payload.username);
  }
}
