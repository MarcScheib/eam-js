import { AuthApi } from '@eam-js/auth/api';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthCredentialsDtoImpl, AuthTokenDtoImpl } from './response';

@ApiTags('auth')
@Controller(AuthApi.BASE)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(AuthApi.SIGN_IN)
  async signIn(
    @Body() authCredentials: AuthCredentialsDtoImpl
  ): Promise<AuthTokenDtoImpl> {
    const { username, password } = authCredentials;
    return await this.authService.signIn(username, password);
  }
}
