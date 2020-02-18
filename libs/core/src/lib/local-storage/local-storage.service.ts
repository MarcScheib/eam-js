import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  setSavedState(state: any, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  getSavedState(localStorageKey: string): any {
    return JSON.parse(localStorage.getItem(localStorageKey));
  }

  removeSavedState(localStorageKey: string) {
    localStorage.removeItem(localStorageKey);
  }
}
