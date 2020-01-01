import { DtoOptions } from '@nestjsx/crud';
import { CreateProjectDto } from './create-project.dto';
import { UpdateProjectDto } from './update-project.dto';

export const dto: DtoOptions = {
  create: CreateProjectDto,
  replace: CreateProjectDto,
  update: UpdateProjectDto,
};
