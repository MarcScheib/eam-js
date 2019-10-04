import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { NavigationFacade } from './navigation.facade';

import { navigationQuery } from './navigation.selectors';
import { ToggleSidenav } from './navigation.actions';
import { NavigationState, initialState, reducer } from './navigation.reducer';

interface TestSchema {
  navigation: NavigationState;
}

describe('NavigationFacade', () => {
  let facade: NavigationFacade;
  let store: Store<TestSchema>;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('navigation', reducer, { initialState }),
        ],
        providers: [NavigationFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(NavigationFacade);
    });

    it('toggleSidenav() should toggle the side nav state', async done => {
      try {
        let result = await readFirst(facade.isSidenavOpen$);

        expect(result).toBe(true);

        facade.toggleSidenav();

        result = await readFirst(facade.isSidenavOpen$);

        expect(result).toBe(false);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
