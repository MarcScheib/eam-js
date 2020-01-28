import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorsModule } from '@eam-js/components/error';
import { CoreModule } from '@eam-js/core';
import { AppRoutingModule } from './app-routing.module';
import { AppShellComponent } from './containers/app-shell/app-shell.component';
import { AppShellModule } from './containers/app-shell/app-shell.module';
import { NotFoundModule } from './containers/not-found/not-found.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    ErrorsModule,
    NotFoundModule,
    AppRoutingModule,
    AppShellModule,
  ],
  bootstrap: [AppShellComponent],
})
export class AppModule {}
