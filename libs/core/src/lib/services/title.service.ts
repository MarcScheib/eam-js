import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Actions, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, share, tap, withLatestFrom } from 'rxjs/operators';
import { routerSelectors } from '../state/core.state';

const DEFAULT_APP_TITLE = 'Enterprise Administration & Management';

@Injectable({ providedIn: 'root' })
export class TitleService {
  viewTitle$: Observable<string>;

  private readonly originalAppTitle: string;

  constructor(
    private readonly actions$: Actions,
    private readonly store$: Store<{}>,
    private readonly title: Title
  ) {
    this.originalAppTitle = this.title.getTitle() || DEFAULT_APP_TITLE;
    this.viewTitle$ = this.getViewTitle();
  }

  private getViewTitle(): Observable<string> {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      withLatestFrom(
        this.store$.pipe(select(routerSelectors.selectCurrentRoute))
      ),
      map(([_, currentRoute]) => currentRoute.data.label || ''),
      tap(label => this.setTitle(label)),
      share()
    );
  }

  private setTitle(viewTitle: string) {
    const title = viewTitle
      ? `${viewTitle} - ${this.originalAppTitle}`
      : this.originalAppTitle;
    this.title.setTitle(title);
  }
}
