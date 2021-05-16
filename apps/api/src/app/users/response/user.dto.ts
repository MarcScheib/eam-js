import { UserDto } from '@eam-js/users/api';
import { ApiProperty } from '@nestjs/swagger';

export class UserDtoImpl implements UserDto {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly name: string;
}
