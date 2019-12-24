import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthContext, AuthService } from './auth.service';

interface AuthCredentialsDTO {
  username: string;
  password: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signIn')
  async signIn(
    @Body() authCredentialsDTO: AuthCredentialsDTO
  ): Promise<AuthContext> {
    const { username, password } = authCredentialsDTO;
    return await this.authService.signIn(username, password);
  }

  @Get('user')
  @UseGuards(AuthGuard())
  findAll() {
    return { user: 'blabla' };
  }
}
