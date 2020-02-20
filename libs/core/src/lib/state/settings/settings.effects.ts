import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { LocalStorageService } from '../../local-storage/local-storage.service';
import { ThemeManagerService } from '../../theme-manager.service';
import {
  actionReloadSettings,
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeTheme,
} from './settings.actions';
import { selectEffectiveTheme, selectSettings } from './settings.selectors';
import { SettingsState } from './settings.state';

@Injectable()
export class SettingsEffects {
  loadSettings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => {
        const settings = this.localStorageService.getSavedState<SettingsState>(
          'settings'
        );
        return actionReloadSettings({ settings });
      })
    )
  );

  persistSettings$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionSettingsChangeAutoNightMode, actionSettingsChangeTheme),
        withLatestFrom(this.store$.pipe(select(selectSettings))),
        tap(([_, settings]) =>
          this.localStorageService.setSavedState<SettingsState>(
            settings,
            'settings'
          )
        )
      ),
    { dispatch: false }
  );

  changeTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionSettingsChangeTheme, actionReloadSettings),
        withLatestFrom(this.store$.pipe(select(selectEffectiveTheme))),
        tap(([_, theme]) => this.themeManagerService.setTheme(theme))
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
