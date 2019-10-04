import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { NAVIGATION_FEATURE_KEY, reducer } from './navigation.reducer';
import { NavigationFacade } from './navigation.facade';

@NgModule({
  imports: [StoreModule.forFeature(NAVIGATION_FEATURE_KEY, reducer)],
  providers: [NavigationFacade],
})
export class NavigationStateModule {}
