import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsDataAccessModule } from '@eam-js/projects/data-access';
import { EntityDefinitionService } from '@ngrx/data';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateProjectModule } from './create-project/create-project.module';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectOverviewModule } from './project-overview/project-overview.module';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ViewProjectModule } from './view-project/view-project.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'create',
        component: CreateProjectComponent,
        data: { label: 'Create' },
      },
      {
        path: ':id',
        component: ViewProjectComponent,
        data: { label: 'View' },
      },
      {
        path: '',
        pathMatch: 'full',
        component: ProjectOverviewComponent,
        data: { label: 'Overview' },
      },
    ]),
    ProjectsDataAccessModule,
    ProjectOverviewModule,
    CreateProjectModule,
    ViewProjectModule,
  ],
})
export class ProjectsFeatureShellModule {
  constructor(readonly eds: EntityDefinitionService) {
    eds.registerMetadataMap({ Project: {} });
  }
}
