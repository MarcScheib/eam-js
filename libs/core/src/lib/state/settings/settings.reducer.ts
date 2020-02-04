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
  on(actionSettingsChangeTheme, (state, action) => ({
    ...state,
    theme: action.theme,
  })),
  on(actionSettingsChangeAutoNightMode, (state, action) => ({
    ...state,
    autoNightMode: action.autoNightMode,
  })),
  on(actionSettingsChangeHour, (state, action) => ({
    ...state,
    hour: action.hour,
  }))
);

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
