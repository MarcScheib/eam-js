import { createAction, props } from '@ngrx/store';
import { SettingsState } from './settings.state';

export const actionSettingsChangeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: string }>()
);

export const actionSettingsChangeAutoNightMode = createAction(
  '[Settings] Change Auto Night Mode',
  props<{ autoNightMode: boolean }>()
);

export const actionSettingsChangeHour = createAction(
  '[Settings] Change Hours',
  props<{ hour: number }>()
);

export const actionReloadSettings = createAction(
  '[Settings] Reload Settings',
  props<{ settings: SettingsState }>()
);
