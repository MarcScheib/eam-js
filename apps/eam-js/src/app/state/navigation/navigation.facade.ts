import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { NavigationPartialState } from './navigation.reducer';
import { ToggleSidenav } from './navigation.actions';
import { navigationQuery } from './navigation.selectors';

@Injectable()
export class NavigationFacade {
  isSidenavOpen$ = this.store$.pipe(select(navigationQuery.isShowSidenav));

  constructor(private store$: Store<NavigationPartialState>) {}

  toggleSidenav() {
    this.store$.dispatch(new ToggleSidenav());
  }
}
