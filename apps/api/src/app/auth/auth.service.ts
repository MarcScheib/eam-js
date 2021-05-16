import { AuthTokenDto } from '@eam-js/auth/api';
import {
  Inject,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { AuthModuleOptions, AUTH_MODULE_OPTIONS } from './auth-module-options';

export interface AuthTokenPayload {
  id: number;
  iat: number;
  exp: number;
}

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    @Inject(AUTH_MODULE_OPTIONS) private readonly options: AuthModuleOptions
  ) {}

  async authenticate(username: string, password: string): Promise<boolean> {
    return this.options.strategy.authenticate(username, password);
  }

  async retrieveUser(username: string): Promise<User> {
    const user = await this.usersService.getUserByName(username);
    if (user) {
      return user;
    }
    return await this.usersService.create({ name: username });
  }

  async signIn(username: string, password: string): Promise<AuthTokenDto> {
    try {
      const authenticated = await this.authenticate(username, password);
      if (authenticated) {
        const user = await this.retrieveUser(username);
        const payload: Partial<AuthTokenPayload> = { id: user.id };
        const token = this.jwtService.sign(payload);
        return { token };
      }
      throw new UnauthorizedException();
    } catch (error) {
      this.logger.error(error);
      throw new UnauthorizedException();
    }
  }

  async validateUser(payload: AuthTokenPayload): Promise<User> {
    return await this.usersService.getUser(payload.id);
  }
}
