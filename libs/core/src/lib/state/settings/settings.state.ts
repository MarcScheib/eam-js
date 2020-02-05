export enum ThemeName {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export interface Theme {
  readonly value: string;
  readonly name: string;
  readonly href: string;
}

export const THEMES: { [key: string]: Theme } = {
  [ThemeName.LIGHT]: {
    value: ThemeName.LIGHT,
    name: 'Light',
    href: 'light.css',
  },
  [ThemeName.DARK]: {
    value: ThemeName.DARK,
    name: 'Dark',
    href: 'dark.js',
  },
};

export interface SettingsState {
  theme: string;
  nightTheme: string;
  autoNightMode: boolean;
  hour: number;
}
