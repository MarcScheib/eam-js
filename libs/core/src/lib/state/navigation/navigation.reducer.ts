import { Action, createReducer, on } from '@ngrx/store';
import {
  actionNavigationToggle,
  actionReloadNavigation,
} from './navigation.actions';
import { NavigationState } from './navigation.state';

export const initialState: NavigationState = {
  showSidenav: true,
};

const reducer = createReducer(
  initialState,
  on(actionReloadNavigation, (state, action) => ({
    ...state,
    ...action.navigation,
  })),
  on(actionNavigationToggle, state => ({
    showSidenav: !state.showSidenav,
  }))
);

export function navigationReducer(
  state: NavigationState | undefined,
  action: Action
) {
  return reducer(state, action);
}
