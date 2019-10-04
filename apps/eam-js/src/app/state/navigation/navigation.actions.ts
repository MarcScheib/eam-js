import { Action } from '@ngrx/store';

export enum NavigationActionTypes {
  ToggleSidenav = '[Navigation] Toggle Sidenav',
}

export class ToggleSidenav implements Action {
  readonly type = NavigationActionTypes.ToggleSidenav;
}

export type NavigationActions = ToggleSidenav;
