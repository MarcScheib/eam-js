import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadingModule } from '@eam-js/components/heading';
import { ProjectsDataAccessModule } from '@eam-js/projects/data-access';
import { EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProjectOverviewComponent },
    ]),
    HeadingModule,
    ProjectsDataAccessModule,
  ],
  declarations: [ProjectOverviewComponent],
})
export class ProjectsOverviewShellModule {
  lazyMetadataMap: EntityMetadataMap = { Project: {} };
  constructor(readonly eds: EntityDefinitionService) {
    eds.registerMetadataMap(this.lazyMetadataMap);
  }
}
