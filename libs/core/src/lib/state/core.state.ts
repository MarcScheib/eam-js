import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { navigationReducer } from './navigation/navigation.reducer';
import { NavigationState } from './navigation/navigation.state';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.state';

export interface AppState {
  settings: SettingsState;
  navigation: NavigationState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
  settings: settingsReducer,
  navigation: navigationReducer,
  router: routerReducer,
};

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>('settings');

export const selectNavigationState = createFeatureSelector<
  AppState,
  NavigationState
>('navigation');

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>('router');
