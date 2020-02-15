import { AuthCredentials } from '@eam-js/auth/api';
import { createAction, props } from '@ngrx/store';

export const signInAction = createAction(
  '[Auth Page] Sign In',
  props<{ credentials: AuthCredentials }>()
);
