import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthTokenDto } from './dto/auth-token.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  async signIn(
    @Body() authCredentials: AuthCredentialsDto
  ): Promise<AuthTokenDto> {
    const { username, password } = authCredentials;
    return await this.authService.signIn(username, password);
  }
}
