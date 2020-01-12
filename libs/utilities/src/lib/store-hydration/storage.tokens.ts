import { InjectionToken } from '@angular/core';

// token for the state keys
export const ROOT_STORAGE_KEYS = new InjectionToken<string[]>('storeKeys');

// token for the localStorage key
export const ROOT_LOCAL_STORAGE_KEY = new InjectionToken<string[]>(
  'localStorage'
);
