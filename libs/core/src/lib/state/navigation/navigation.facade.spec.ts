import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NavigationService } from '@eam-js/components/navigation';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';
import { of } from 'rxjs';
import { NavigationFacade } from './navigation.facade';
import { initialState, navigationReducer } from './navigation.reducer';

describe('NavigationFacade', () => {
  let facade: NavigationFacade;

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('navigation', navigationReducer, {
            initialState,
          }),
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
        providers: [
          {
            provide: NavigationService,
            useValue: { navigationViews: of(null), currentNodes: of(null) },
          },
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      facade = TestBed.inject(NavigationFacade);
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
