import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { environment } from '../environments/environment';
import { Project } from './projects/project.entity';
import { UserEntity } from './users/user.entity';

export const ormConfig: TypeOrmModuleOptions = {
  ...environment.db,
  type: 'mysql',
  entities: [Project, UserEntity],
};
