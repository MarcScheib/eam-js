import { Project } from '@eam-js/projects/api';
import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '../../users/response/user.dto';

export class ProjectDto implements Project {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly createdAt: string;
  @ApiProperty()
  readonly updatedAt: string;
  @ApiProperty()
  readonly isActive: boolean;
  @ApiProperty()
  readonly creator?: UserDto;
}
