import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import { ThemeManagerService } from '../../theme-manager.service';
import {
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeTheme,
} from './settings.actions';
import { selectSettings } from './settings.selectors';
import { THEMES } from './settings.state';

@Injectable()
export class SettingsEffects {
  persistSettings$ = createEffect(
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

  changeTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionSettingsChangeTheme),
        tap(action => {
          console.log(action);
          this.themeManagerService.setStyle(
            action.theme,
            THEMES[action.theme].href
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store<{}>,
    private readonly localStorageService: LocalStorageService,
    private readonly themeManagerService: ThemeManagerService
  ) {}
}
