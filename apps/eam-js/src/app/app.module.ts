import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthDataAccessModule } from '@eam-js/auth/data-access';
import { ErrorsModule } from '@eam-js/components/error';
import { AuthHeaderInterceptor, CoreModule, HTTP_CONFIG } from '@eam-js/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppShellComponent } from './containers/app-shell/app-shell.component';
import { AppShellModule } from './containers/app-shell/app-shell.module';
import { NotFoundModule } from './containers/not-found/not-found.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    AuthDataAccessModule.forRoot(),
    ErrorsModule,
    NotFoundModule,
    AppRoutingModule,
    AppShellModule,
  ],
  providers: [
    { provide: HTTP_CONFIG, useValue: { baseUrl: environment.baseUrlRest } },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppShellComponent],
})
export class AppModule {}
