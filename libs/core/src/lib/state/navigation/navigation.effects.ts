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
import { selectNavigationState } from '../core.state';
import {
  actionNavigationToggle,
  actionReloadNavigation,
} from './navigation.actions';
import { NavigationState } from './navigation.state';

@Injectable()
export class NavigationEffects {
  loadNavigation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => {
        const navigation = this.localStorageService.getSavedState<
          NavigationState
        >('navigation');
        return actionReloadNavigation({ navigation });
      })
    )
  );

  persistNavigation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(actionNavigationToggle),
        withLatestFrom(this.store$.pipe(select(selectNavigationState))),
        tap(([_, navigation]) =>
          this.localStorageService.setSavedState<NavigationState>(
            navigation,
            'navigation'
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private readonly store$: Store<{}>,
    private readonly actions$: Actions,
    private readonly localStorageService: LocalStorageService
  ) {}
}
