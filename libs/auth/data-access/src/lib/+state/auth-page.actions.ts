import { createAction, props } from '@ngrx/store';
import { SignInData } from '../sign-in-data';

export const signInAction = createAction(
  '[Auth Page] Sign In',
  props<{ signInData: SignInData }>()
);
