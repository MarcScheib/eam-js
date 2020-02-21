import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProjectStatusModule } from '../project-status/project-status.module';
import { ProjectDetailsComponent } from './project-details.component';

@NgModule({
  imports: [CommonModule, MatCardModule, ProjectStatusModule],
  declarations: [ProjectDetailsComponent],
  exports: [ProjectDetailsComponent],
})
export class ProjectDetailsModule {}
