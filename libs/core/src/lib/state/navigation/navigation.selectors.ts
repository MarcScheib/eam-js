import { createSelector } from '@ngrx/store';
import { selectNavigationState } from '../core.state';
import { NavigationState } from './navigation.state';

const isShowSidenav = createSelector(
  selectNavigationState,
  (state: NavigationState) => state.showSidenav
);

export const navigationQuery = {
  isShowSidenav,
};
