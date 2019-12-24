import { Project } from '@eam-js/projects/api';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiProperty, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { ProjectsService } from './projects.service';

export class ProjectDTO implements Project {
  @ApiProperty()
  readonly id: number;
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly description: string;
}

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  //@UseGuards(AuthGuard())
  findAll(): Promise<ProjectDTO[]> {
    return this.projectsService.findAll();
  }

  @Get(':id')
  //@UseGuards(AuthGuard())
  find(@Param('id') id: number): Promise<ProjectDTO> {
    return this.projectsService.find(id);
  }

  @Post()
  //@UseGuards(AuthGuard())
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ProjectDTO,
  })
  create(@Body() project: ProjectDTO): Promise<ProjectDTO> {
    return this.projectsService.create(project);
  }

  @Delete(':id')
  //@UseGuards(AuthGuard())
  delete(@Param('id') id: number): Promise<DeleteResult> {
    return this.projectsService.delete(id);
  }
}
