import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ErrorComponent],
})
export class ErrorModule {}
