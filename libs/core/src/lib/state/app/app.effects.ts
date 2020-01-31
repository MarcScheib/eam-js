import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { routerSelectors } from '../router/router.selectors';
import { actionSetViewTitle } from './app.actions';

const DEFAULT_APP_TITLE = 'Enterprise Administration & Management';

@Injectable()
export class AppEffects {
  private originalAppTitle: string;

  init$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROOT_EFFECTS_INIT),
        tap(() => {
          this.originalAppTitle = this.title.getTitle() || DEFAULT_APP_TITLE;
        })
      ),
    { dispatch: false }
  );

  loadApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      withLatestFrom(
        this.store$.pipe(select(routerSelectors.selectCurrentRoute))
      ),
      map(([_, currentRoute]) => currentRoute.data.label || ''),
      tap(viewTitle => this.setTitle(viewTitle)),
      map(viewTitle => actionSetViewTitle({ viewTitle }))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store<{}>,
    private readonly title: Title
  ) {}

  private setTitle(viewTitle: string) {
    const title = viewTitle
      ? `${viewTitle} - ${this.originalAppTitle}`
      : this.originalAppTitle;
    this.title.setTitle(title);
  }
}
