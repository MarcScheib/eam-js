import { AuthCredentialsDto } from '@eam-js/auth/api';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDtoImpl implements AuthCredentialsDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
