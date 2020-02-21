import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ProjectDetailsComponent } from './project-details.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [ProjectDetailsComponent],
  exports: [ProjectDetailsComponent],
})
export class ProjectDetailsModule {}
