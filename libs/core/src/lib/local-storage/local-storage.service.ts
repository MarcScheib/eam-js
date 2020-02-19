import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  setSavedState<T>(state: T, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  getSavedState<T>(localStorageKey: string): T {
    return JSON.parse(localStorage.getItem(localStorageKey));
  }

  removeSavedState(localStorageKey: string) {
    localStorage.removeItem(localStorageKey);
  }
}
