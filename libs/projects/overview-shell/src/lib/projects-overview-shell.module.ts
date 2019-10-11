import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProjectOverviewComponent } from './project-overview/project-overview.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProjectOverviewComponent },
    ]),
  ],
  declarations: [ProjectOverviewComponent],
})
export class ProjectsOverviewShellModule {}
