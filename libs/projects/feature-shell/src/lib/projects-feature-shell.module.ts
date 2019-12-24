import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsDataAccessModule } from '@eam-js/projects/data-access';
import { EntityDefinitionService } from '@ngrx/data';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectOverviewModule } from './project-overview/project-overview.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProjectOverviewComponent },
    ]),
    ProjectsDataAccessModule,
    ProjectOverviewModule,
  ],
})
export class ProjectsFeatureShellModule {
  constructor(readonly eds: EntityDefinitionService) {
    eds.registerMetadataMap({ Project: {} });
  }
}
