import { AuthTokenDto } from '@eam-js/auth/api';
import { ApiProperty } from '@nestjs/swagger';

export class AuthTokenDtoImpl implements AuthTokenDto {
  @ApiProperty()
  token: string;
}
