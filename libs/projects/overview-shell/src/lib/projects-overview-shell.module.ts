import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadingModule } from '@eam-js/components/heading';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProjectOverviewComponent },
    ]),
    HeadingModule,
  ],
  declarations: [ProjectOverviewComponent],
})
export class ProjectsOverviewShellModule {}
