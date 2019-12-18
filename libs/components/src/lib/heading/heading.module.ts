import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  HeadingActionsDirective,
  HeadingComponent,
  HeadingTitleComponent,
} from './heading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    HeadingComponent,
    HeadingTitleComponent,
    HeadingActionsDirective,
  ],
  exports: [HeadingComponent, HeadingTitleComponent, HeadingActionsDirective],
})
export class HeadingModule {}
