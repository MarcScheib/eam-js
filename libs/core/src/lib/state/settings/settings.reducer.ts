import { Action, createReducer, on } from '@ngrx/store';
import {
  actionReloadSettings,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeHour,
  actionSettingsChangeTheme,
} from './settings.actions';
import { SettingsState, ThemeName } from './settings.state';

export const initialState: SettingsState = {
  theme: ThemeName.LIGHT,
  autoNightMode: false,
  nightTheme: ThemeName.DARK,
  hour: 0,
};

const reducer = createReducer(
  initialState,
  on(actionReloadSettings, (state, action) => ({
    ...state,
    ...action.settings,
  })),
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
