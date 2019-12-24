import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CreateProjectComponent } from './create-project.component';

@NgModule({
  imports: [CommonModule, MatCardModule],
  declarations: [CreateProjectComponent],
})
export class CreateProjectModule {}
