import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { LabelModule } from '@eam-js/components/label';
import { ProjectListComponent } from './project-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    LabelModule,
  ],
  declarations: [ProjectListComponent],
  exports: [ProjectListComponent],
})
export class ProjectListModule {}
