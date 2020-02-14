import { AuthToken } from '@eam-js/auth/api';
import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenDto implements AuthToken {
  @ApiProperty()
  token: string;
}
