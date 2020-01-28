import {
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeHour,
  actionSettingsChangeTheme,
} from './settings.actions';

describe('Settings Actions', () => {
  it('should create ActionSettingsChangeTheme action', () => {
    const action = actionSettingsChangeTheme({
      theme: 'dark',
    });

    expect(action.type).toEqual(actionSettingsChangeTheme.type);
    expect(action.theme).toEqual('dark');
  });

  it('should create ActionSettingsChangeAutoNightMode action', () => {
    const action = actionSettingsChangeAutoNightMode({
      autoNightMode: true,
    });

    expect(action.type).toEqual(actionSettingsChangeAutoNightMode.type);
    expect(action.autoNightMode).toEqual(true);
  });

  it('should create ActionSettingsChangeHour action', () => {
    const action = actionSettingsChangeHour({
      hour: 7,
    });

    expect(action.type).toEqual(actionSettingsChangeHour.type);
    expect(action.hour).toEqual(7);
  });
});
