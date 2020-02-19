import { AuthToken } from '@eam-js/auth/api';
import { createAction, props } from '@ngrx/store';

export const authEffectsInitAction = createAction('[Auth] Init Effect');
export const loadTokenAction = createAction(
  '[Auth] Load Token',
  props<{ token: AuthToken }>()
);
export const signOutAction = createAction('[Auth] Sign Out');
