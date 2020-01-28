import {
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeHour,
  actionSettingsChangeTheme,
} from './settings.actions';
import { initialState, settingsReducer } from './settings.reducer';

describe('SettingsReducer', () => {
  it('should return default state', () => {
    const action = {} as any;
    const state = settingsReducer(undefined, action);
    expect(state).toBe(initialState);
  });

  it('should update theme', () => {
    const action = actionSettingsChangeTheme({ theme: 'dark' });
    const state = settingsReducer(undefined, action);
    expect(state.theme).toEqual('dark');
  });

  it('should update autoNightMode', () => {
    const action = actionSettingsChangeAutoNightMode({
      autoNightMode: true,
    });
    const state = settingsReducer(undefined, action);
    expect(state.autoNightMode).toEqual(true);
  });

  it('should update hour', () => {
    const action = actionSettingsChangeHour({
      hour: 7,
    });
    const state = settingsReducer(undefined, action);
    expect(state.hour).toEqual(7);
  });
});
