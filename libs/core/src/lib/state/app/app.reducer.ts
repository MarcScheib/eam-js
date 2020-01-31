import { Action, createReducer, on } from '@ngrx/store';
import { actionSetViewTitle } from './app.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  viewTitle: '',
};

const reducer = createReducer(
  initialState,
  on(actionSetViewTitle, (state, { viewTitle }) => ({ ...state, viewTitle }))
);

export function appReducer(state: AppState | undefined, action: Action) {
  return reducer(state, action);
}
