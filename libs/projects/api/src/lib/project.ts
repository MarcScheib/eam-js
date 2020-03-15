import { User } from '@eam-js/users/api';
import { ProjectType } from './project-type';

export interface Project {
  id: number;
  name: string;
  description: string;
  type: ProjectType;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  creator?: User;
}
