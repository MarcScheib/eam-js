import { Action, ActionReducer, INIT } from '@ngrx/store';
import { LocalStorageService } from '../local-storage/local-storage.service';

export function initStateFromLocalStorage<S, A extends Action = Action>(
  storageService: LocalStorageService
) {
  return function(reducer: ActionReducer<S, A>) {
    return function(state: S, action: A) {
      const newState = reducer(state, action);
      if (INIT === action.type) {
        if (storageService.getSavedState('settings')) {
          return {
            ...newState,
            settings: storageService.getSavedState('settings'),
          };
        }
      }
      return newState;
    };
  };
}
