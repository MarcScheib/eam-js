import { Action, createReducer, on } from '@ngrx/store';
import {
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeHour,
  actionSettingsChangeTheme,
} from './settings.actions';
import { SettingsState } from './settings.state';

export const initialState: SettingsState = {
  theme: 'default',
  autoNightMode: false,
  nightTheme: 'dark',
  hour: 0,
};

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeTheme,
    actionSettingsChangeAutoNightMode,
    actionSettingsChangeHour,
    (state, action) => ({ ...state, ...action })
  )
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
