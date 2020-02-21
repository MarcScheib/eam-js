import { User } from '@eam-js/users/api';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto implements User {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly name: string;
}
