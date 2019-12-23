import { Project } from '@eam-js/projects/api';
import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  //@UseGuards(AuthGuard())
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }
}
