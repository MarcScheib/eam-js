import { UserDto } from '@eam-js/users/api';
import { ProjectType } from './project-type';

export interface ProjectDto {
  id: number;
  name: string;
  description: string;
  type: ProjectType;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  creator?: UserDto;
}
