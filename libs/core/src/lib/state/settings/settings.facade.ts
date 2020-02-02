import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {
  actionSettingsChangeAutoNightMode,
  actionSettingsChangeTheme,
} from './settings.actions';
import { selectSettings } from './settings.selectors';

@Injectable({ providedIn: 'root' })
export class SettingsFacade {
  settings$ = this.store$.pipe(select(selectSettings));

  constructor(private store$: Store<{}>) {}

  selectTheme(theme: string) {
    this.store$.dispatch(actionSettingsChangeTheme({ theme }));
  }

  setAutoNightMode(autoNightMode: boolean) {
    this.store$.dispatch(actionSettingsChangeAutoNightMode({ autoNightMode }));
  }
}
