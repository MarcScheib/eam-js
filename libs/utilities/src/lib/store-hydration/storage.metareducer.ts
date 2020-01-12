import { Action, ActionReducer } from '@ngrx/store';
import { LocalStorageService } from '../local-storage.service';

function merge<S>(nextState: S, savedState: any): S {
  return { ...nextState, ...savedState };
}

function pick<S>(state: S, saveKeys: string[]): any {
  return saveKeys.reduce(
    (saveState: any, saveKey: string) =>
      state.hasOwnProperty(saveKey)
        ? { ...saveState, [saveKey]: state[saveKey] }
        : saveState,
    {}
  );
}

export function storageMetaReducer<S, A extends Action = Action>(
  saveKeys: string[],
  localStorageKey: string,
  storageService: LocalStorageService
) {
  let onInit = true;
  return function(reducer: ActionReducer<S, A>) {
    return function(state: S, action: A): S {
      // get the next state.
      const nextState = reducer(state, action);
      // init the application state.
      if (onInit) {
        onInit = false;
        const savedState = storageService.getSavedState(localStorageKey);
        return merge(nextState, savedState);
      }

      // save the next state to the application storage.
      const stateToSave = pick(nextState, saveKeys);
      storageService.setSavedState(stateToSave, localStorageKey);
      return nextState;
    };
  };
}
