import { AuthCredentials } from '@eam-js/auth/api';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto implements AuthCredentials {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
