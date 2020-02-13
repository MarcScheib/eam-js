import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from '@eam-js/components/breadcrumb';
import { ConfirmationDialogModule } from '@eam-js/components/confirmation-dialog';
import { HeadingModule } from '@eam-js/components/heading';
import { ViewProjectComponent } from './view-project.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    BreadcrumbModule,
    ConfirmationDialogModule,
    HeadingModule,
  ],
  declarations: [ViewProjectComponent],
})
export class ViewProjectModule {}
