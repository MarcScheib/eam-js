import { InjectionToken } from '@angular/core';

export const WINDOW_TOKEN = new InjectionToken<Window>('Window');
export function windowProvider() {
  return window;
}
