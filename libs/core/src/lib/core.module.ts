import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  DefaultDataServiceConfig,
  EntityDataModule,
  HttpUrlGenerator,
} from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import {
  MetaReducer,
  StoreModule,
  USER_PROVIDED_META_REDUCERS,
} from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PluralHttpUrlGenerator } from './entity-data/plural-http-url-generator';
import { LocalStorageService } from './local-storage/local-storage.service';
import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage';
import { AppEffects } from './state/app/app.effects';
import { reducers } from './state/core.state';
import { SettingsEffects } from './state/settings/settings.effects';

export function getMetaReducers(
  storageService: LocalStorageService
): MetaReducer<any>[] {
  return [initStateFromLocalStorage(storageService)];
}

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
    EffectsModule.forRoot([AppEffects, SettingsEffects]),
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
        {
          provide: USER_PROVIDED_META_REDUCERS,
          deps: [LocalStorageService],
          useFactory: getMetaReducers,
        },
      ],
    };
  }
}
