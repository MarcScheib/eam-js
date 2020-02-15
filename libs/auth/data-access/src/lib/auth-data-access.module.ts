import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthEffects } from './+state/auth.effects';
import { AuthFacade } from './+state/auth.facade';
import { AUTH_FEATURE_KEY, reducer } from './+state/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_KEY, reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthDataAccessModule {
  static forRoot(): ModuleWithProviders<AuthDataAccessModule> {
    return {
      ngModule: AuthDataAccessModule,
      providers: [AuthFacade],
    };
  }
}
