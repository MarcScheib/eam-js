import { Injectable } from '@angular/core';
import { NavigationService } from '@eam-js/components/navigation';
import { select, Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';
import { actionNavigationToggle } from './navigation.actions';
import { navigationQuery } from './navigation.selectors';

@Injectable({ providedIn: 'root' })
export class NavigationFacade {
  isSidenavOpen$ = this.store$.pipe(select(navigationQuery.isShowSidenav));
  sideNavNodes$ = this.navigationService.navigationViews.pipe(pluck('SideNav'));
  currentSideNavNode$ = this.navigationService.currentNodes.pipe(
    pluck('SideNav')
  );

  constructor(
    private readonly store$: Store<{}>,
    private readonly navigationService: NavigationService
  ) {}

  toggleSidenav() {
    this.store$.dispatch(actionNavigationToggle());
  }
}
