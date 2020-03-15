import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '@eam-js/components/breadcrumb';
import { HeadingModule } from '@eam-js/components/heading';
import { ProjectListModule } from '@eam-js/projects/ui';
import { ProjectOverviewComponent } from './project-overview.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    BreadcrumbModule,
    HeadingModule,
    ProjectListModule,
  ],
  declarations: [ProjectOverviewComponent],
  exports: [ProjectOverviewComponent],
})
export class ProjectOverviewModule {}
