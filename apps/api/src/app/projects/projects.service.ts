import { Project } from '@eam-js/projects/api';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ProjectEntity } from './project.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectsRepository: Repository<ProjectEntity>
  ) {}

  findAll(): Promise<ProjectEntity[]> {
    return this.projectsRepository.find();
  }

  find(id: number): Promise<ProjectEntity> {
    return this.projectsRepository.findOne(id);
  }

  create(project: Project): Promise<ProjectEntity> {
    return this.projectsRepository.save(project);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.projectsRepository.delete(id);
  }
}
