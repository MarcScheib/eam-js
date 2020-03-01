import { User } from '@eam-js/users/api';

export interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  creator?: User;
}
