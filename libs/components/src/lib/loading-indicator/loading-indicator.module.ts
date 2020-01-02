import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material';
import { LoadingIndicatorComponent } from './loading-indicator.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [LoadingIndicatorComponent],
  declarations: [LoadingIndicatorComponent],
})
export class LoadingIndicatorModule {}
