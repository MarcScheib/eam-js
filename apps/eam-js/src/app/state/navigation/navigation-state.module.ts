import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NAVIGATION_FEATURE_KEY, reducer } from './navigation.reducer';

@NgModule({
  imports: [StoreModule.forFeature(NAVIGATION_FEATURE_KEY, reducer)],
})
export class NavigationStateModule {}
