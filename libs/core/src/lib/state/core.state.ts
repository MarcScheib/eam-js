import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { appReducer } from './app/app.reducer';
import { AppState } from './app/app.state';
import { navigationReducer } from './navigation/navigation.reducer';
import { NavigationState } from './navigation/navigation.state';
import { RouterStateUrl } from './router/router.state';
import { settingsReducer } from './settings/settings.reducer';
import { SettingsState } from './settings/settings.state';

export interface State {
  app: AppState;
  settings: SettingsState;
  navigation: NavigationState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
  settings: settingsReducer,
  navigation: navigationReducer,
  router: routerReducer,
};

export const selectAppState = createFeatureSelector<State, AppState>('app');

export const selectSettingsState = createFeatureSelector<State, SettingsState>(
  'settings'
);

export const selectNavigationState = createFeatureSelector<
  State,
  NavigationState
>('navigation');

export const selectRouterState = createFeatureSelector<
  State,
  RouterReducerState<RouterStateUrl>
>('router');
