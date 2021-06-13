import { Inject, Injectable } from '@angular/core';
import { WINDOW_TOKEN } from '../window';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly storage: Storage;

  constructor(@Inject(WINDOW_TOKEN) window: Window) {
    try {
      this.storage = window.localStorage;
    } catch {
      // When cookies are disabled in the browser, even trying to access
      // `window.localStorage` throws an error. Use a no-op storage.
      this.storage = {
        length: 0,
        clear: () => undefined,
        getItem: () => null,
        key: () => null,
        removeItem: () => undefined,
        setItem: () => undefined,
      };
    }
  }

  setSavedState<T>(state: T, storageKey: string) {
    this.storage.setItem(storageKey, JSON.stringify(state));
  }

  getSavedState<T>(storageKey: string): T {
    return JSON.parse(this.storage.getItem(storageKey));
  }

  removeSavedState(storageKey: string) {
    this.storage.removeItem(storageKey);
  }
}
