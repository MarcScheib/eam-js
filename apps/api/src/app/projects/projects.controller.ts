import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from '@nestjsx/crud';
import { dto } from './dto';
import { Project } from './project.entity';
import { ProjectsService } from './projects.service';
import { serialize } from './response';

@ApiTags('projects')
@Crud({
  model: {
    type: Project,
  },
  dto,
  serialize,
})
@Controller('projects')
export class ProjectsController {
  constructor(public readonly service: ProjectsService) {}
}
