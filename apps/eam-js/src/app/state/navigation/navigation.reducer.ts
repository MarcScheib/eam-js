import { NavigationActionTypes, NavigationActions } from './navigation.actions';

export const NAVIGATION_FEATURE_KEY = 'navigation';

export interface NavigationState {
  showSidenav: boolean;
}

export interface NavigationPartialState {
  readonly [NAVIGATION_FEATURE_KEY]: NavigationState;
}

export const initialState: NavigationState = {
  showSidenav: true,
};

export function reducer(
  state: NavigationState = initialState,
  action: NavigationActions
): NavigationState {
  switch (action.type) {
    case NavigationActionTypes.ToggleSidenav: {
      state = {
        ...state,
        showSidenav: !state.showSidenav,
      };
      break;
    }
  }
  return state;
}
