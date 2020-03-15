import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  DefaultDataServiceConfig,
  EntityDataModule,
  HttpUrlGenerator,
} from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PluralHttpUrlGenerator } from './entity-data/plural-http-url-generator';
import { AppEffects } from './state/app/app.effects';
import { reducers } from './state/core.state';
import { NavigationEffects } from './state/navigation/navigation.effects';
import { SettingsEffects } from './state/settings/settings.effects';
import { windowProvider, WindowToken } from './window';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionSerializability: false,
        strictStateSerializability: false,
      },
    }),
    EffectsModule.forRoot([AppEffects, NavigationEffects, SettingsEffects]),
    EntityDataModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'StableNet Store DevTools',
      logOnly: true, // TODO: env
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal,
    }),
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: DefaultDataServiceConfig,
          useValue: {
            root: 'http://localhost:3333/api',
            timeout: 3000,
          },
        },
        { provide: HttpUrlGenerator, useClass: PluralHttpUrlGenerator },
        { provide: WindowToken, useFactory: windowProvider },
      ],
    };
  }
}
