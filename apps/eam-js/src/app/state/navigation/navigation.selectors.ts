import { createFeatureSelector, createSelector } from '@ngrx/store';

import { NAVIGATION_FEATURE_KEY, NavigationState } from './navigation.reducer';

const getNavigationState = createFeatureSelector<NavigationState>(
  NAVIGATION_FEATURE_KEY
);

const isShowSidenav = createSelector(
  getNavigationState,
  (state: NavigationState) => state.showSidenav
);

export const navigationQuery = {
  isShowSidenav,
};
