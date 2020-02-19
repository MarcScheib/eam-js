import { AuthToken } from '@eam-js/auth/api';
import { createAction, props } from '@ngrx/store';

export const signInSuccessAction = createAction(
  '[Auth/API] Sign In Success',
  props<{ token: AuthToken; keepToken: boolean }>()
);

export const signInFailureAction = createAction(
  '[Auth/API] SignIn Failure',
  props<{ error: any }>()
);

export const signInRedirectAction = createAction('[Auth/API] Sign In Redirect');
