import { Injectable } from '@angular/core';
import { Project } from '@eam-js/projects/api';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from '@ngrx/data';

@Injectable()
export class ProjectsApiService extends EntityCollectionServiceBase<Project> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Project', serviceElementsFactory);
  }
}
