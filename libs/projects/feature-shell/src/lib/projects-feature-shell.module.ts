import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const routes = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProjectsFeatureShellModule {}
