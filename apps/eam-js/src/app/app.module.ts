import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ErrorsModule } from '@eam-js/components/error';
import { PluralHttpUrlGenerator } from '@eam-js/utilities';
import {
  DefaultDataServiceConfig,
  EntityDataModule,
  HttpUrlGenerator,
} from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppShellComponent } from './containers/app-shell/app-shell.component';
import { AppShellModule } from './containers/app-shell/app-shell.module';
import { NotFoundModule } from './containers/not-found/not-found.module';
import { routes } from './routes';
import { NavigationStateModule } from './state/navigation/navigation-state.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
          strictActionSerializability: true,
          strictStateSerializability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
    }),
    NavigationStateModule,
    ErrorsModule,
    NotFoundModule,
    AppShellModule,
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: {
        root: 'http://localhost:3333/api',
        timeout: 3000,
      },
    },
    { provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator },
  ],
  bootstrap: [AppShellComponent],
})
export class AppModule {}
