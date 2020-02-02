import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import {
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeTheme,
} from './settings.actions';
import { selectSettings } from './settings.selectors';

@Injectable()
export class SettingsEffects {
  persistSettings = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionSettingsChangeAutoNightMode, actionSettingsChangeTheme),
        withLatestFrom(this.store$.pipe(select(selectSettings))),
        tap(([_, settings]) =>
          this.localStorageService.setSavedState(settings, 'settings')
        )
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store$: Store<{}>,
    private localStorageService: LocalStorageService
  ) {}
}
