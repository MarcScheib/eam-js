import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelModule } from '@eam-js/components/label';
import { ProjectStatusComponent } from './project-status.component';

@NgModule({
  imports: [CommonModule, LabelModule],
  declarations: [ProjectStatusComponent],
  exports: [ProjectStatusComponent],
})
export class ProjectStatusModule {}
