import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [MatButtonModule],
  exports: [NotFoundComponent],
  declarations: [NotFoundComponent],
})
export class NotFoundModule {}
