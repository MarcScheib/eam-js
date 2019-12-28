import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CustomErrorHandler } from './custom-error-handler.service';
import { ErrorContainerComponent } from './error-container/error-container.component';
import { ErrorViewComponent } from './error-view/error-view.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  declarations: [ErrorContainerComponent, ErrorViewComponent],
  exports: [ErrorContainerComponent],
  providers: [
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
  ],
})
export class ErrorsModule {}
