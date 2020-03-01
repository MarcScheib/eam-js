import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { dto } from './dto';
import { ProjectsService } from './projects.service';
import { serialize } from './response';
import { ProjectDto } from './response/project.dto';

@ApiTags('projects')
@Crud({
  model: {
    type: ProjectDto,
  },
  dto,
  serialize,
  query: {
    join: {
      creator: {},
    },
  },
})
@Controller('projects')
export class ProjectsController {
  constructor(public readonly service: ProjectsService) {}
}
