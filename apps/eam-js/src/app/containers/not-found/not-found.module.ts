import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [MatButtonModule, MatCardModule],
  exports: [NotFoundComponent],
  declarations: [NotFoundComponent],
  providers: [],
})
export class NotFoundModule {}
