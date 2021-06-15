import { Injectable } from '@angular/core';
import { ProjectDto } from '@eam-js/projects/api';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ProjectsApiService extends EntityCollectionServiceBase<ProjectDto> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Project', serviceElementsFactory);
  }
}
