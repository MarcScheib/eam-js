import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeadingModule } from '@eam-js/components/heading';
import { ProjectOverviewComponent } from './project-overview.component';

@NgModule({
  imports: [CommonModule, HeadingModule],
  declarations: [ProjectOverviewComponent],
  exports: [ProjectOverviewComponent],
})
export class ProjectOverviewModule {}
