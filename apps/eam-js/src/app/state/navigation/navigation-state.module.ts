import { InjectionToken, NgModule } from '@angular/core';
import { LocalStorageService, storageMetaReducer } from '@eam-js/utilities';
import { StoreConfig, StoreModule } from '@ngrx/store';
import { NavigationActions } from './navigation.actions';
import {
  NavigationState,
  NAVIGATION_FEATURE_KEY,
  reducer,
} from './navigation.reducer';

const NAVIGATION_STORAGE_KEYS = new InjectionToken<keyof NavigationState[]>(
  NAVIGATION_FEATURE_KEY
);
const NAVIGATION_LOCAL_STORAGE_KEY = new InjectionToken<string[]>(
  'NavigationStorage'
);
const NAVIGATION_CONFIG_TOKEN = new InjectionToken<
  StoreConfig<NavigationState, NavigationActions>
>('NavigationConfigToken');

function getNavigationConfig(
  saveKeys: string[],
  localStorageKey: string,
  storageService: LocalStorageService
) {
  return {
    metaReducers: [
      storageMetaReducer(saveKeys, localStorageKey, storageService),
    ],
  };
}

@NgModule({
  imports: [
    StoreModule.forFeature(
      NAVIGATION_FEATURE_KEY,
      reducer,
      NAVIGATION_CONFIG_TOKEN
    ),
  ],
  providers: [
    {
      provide: NAVIGATION_LOCAL_STORAGE_KEY,
      useValue: '__navigation_storage__',
    },
    { provide: NAVIGATION_STORAGE_KEYS, useValue: ['showSidenav'] },
    {
      provide: NAVIGATION_CONFIG_TOKEN,
      deps: [
        NAVIGATION_STORAGE_KEYS,
        NAVIGATION_LOCAL_STORAGE_KEY,
        LocalStorageService,
      ],
      useFactory: getNavigationConfig,
    },
  ],
})
export class NavigationStateModule {}
