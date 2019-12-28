import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
})
export class BreadcrumbModule {}
