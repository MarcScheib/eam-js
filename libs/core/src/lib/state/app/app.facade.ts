import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { appQuery } from './app.selectors';

@Injectable({ providedIn: 'root' })
export class AppFacade {
  viewTitle$ = this.store$.pipe(select(appQuery.getViewTitle));

  constructor(private store$: Store<{}>) {}
}
