import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BreadcrumbModule } from '@eam-js/components/breadcrumb';
import { HeadingModule } from '@eam-js/components/heading';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    BreadcrumbModule,
    HeadingModule,
  ],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
