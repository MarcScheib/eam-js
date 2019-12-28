import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BreadcrumbModule } from '@eam-js/components/breadcrumb';
import { HeadingModule } from '@eam-js/components/heading';
import { CreateProjectComponent } from './create-project.component';

@NgModule({
  imports: [CommonModule, MatCardModule, BreadcrumbModule, HeadingModule],
  declarations: [CreateProjectComponent],
})
export class CreateProjectModule {}
