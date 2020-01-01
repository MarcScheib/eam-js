import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabelComponent } from './label.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LabelComponent],
  exports: [LabelComponent],
})
export class LabelModule {}
