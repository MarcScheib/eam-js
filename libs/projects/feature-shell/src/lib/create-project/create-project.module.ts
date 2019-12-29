import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbModule } from '@eam-js/components/breadcrumb';
import { HeadingModule } from '@eam-js/components/heading';
import { CreateProjectComponent } from './create-project.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BreadcrumbModule,
    HeadingModule,
  ],
  declarations: [CreateProjectComponent],
})
export class CreateProjectModule {}
