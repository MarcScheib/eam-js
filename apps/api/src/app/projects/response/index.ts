import { SerializeOptions } from '@nestjsx/crud';
import { ProjectDtoImpl } from './project.dto';

export const serialize: SerializeOptions = {
  get: ProjectDtoImpl,
  getMany: ProjectDtoImpl,
  create: ProjectDtoImpl,
  createMany: ProjectDtoImpl,
  update: ProjectDtoImpl,
  replace: ProjectDtoImpl,
  delete: ProjectDtoImpl,
};
