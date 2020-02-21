import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectDescriptionComponent } from './project-description.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectDescriptionComponent],
  exports: [ProjectDescriptionComponent],
})
export class ProjectDescriptionModule {}
