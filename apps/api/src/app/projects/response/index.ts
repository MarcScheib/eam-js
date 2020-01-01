import { SerializeOptions } from '@nestjsx/crud';
import { ProjectDto } from './project.dto';

export const serialize: SerializeOptions = {
  get: ProjectDto,
  getMany: ProjectDto,
  create: ProjectDto,
  createMany: ProjectDto,
  update: ProjectDto,
  replace: ProjectDto,
  delete: ProjectDto,
};
