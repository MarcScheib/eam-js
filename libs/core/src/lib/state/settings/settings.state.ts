export enum ThemeName {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export interface Theme {
  readonly value: string;
  readonly name: string;
  readonly href: string;
  readonly default?: boolean;
}

export const THEMES: { [key: string]: Theme } = {
  [ThemeName.LIGHT]: {
    value: ThemeName.LIGHT,
    name: 'Light',
    href: 'themes-light.css',
    default: true,
  },
  [ThemeName.DARK]: {
    value: ThemeName.DARK,
    name: 'Dark',
    href: 'themes-dark.css',
  },
};

export interface SettingsState {
  theme: string;
  nightTheme: string;
  autoNightMode: boolean;
  hour: number;
}
