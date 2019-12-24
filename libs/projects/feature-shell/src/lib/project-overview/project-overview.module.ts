import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeadingModule } from '@eam-js/components/heading';
import { ProjectListModule } from '@eam-js/projects/ui';
import { ProjectOverviewComponent } from './project-overview.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HeadingModule,
    ProjectListModule,
  ],
  declarations: [ProjectOverviewComponent],
  exports: [ProjectOverviewComponent],
})
export class ProjectOverviewModule {}
