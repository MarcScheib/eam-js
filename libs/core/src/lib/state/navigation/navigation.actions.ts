import { createAction, props } from '@ngrx/store';
import { NavigationState } from './navigation.state';

export const actionNavigationToggle = createAction(
  '[Navigation] Toggle Sidenav'
);

export const actionReloadNavigation = createAction(
  '[Navigation] Reload Navigation',
  props<{ navigation: NavigationState }>()
);
