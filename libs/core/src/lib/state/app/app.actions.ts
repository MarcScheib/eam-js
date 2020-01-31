import { createAction, props } from '@ngrx/store';

export const actionSetViewTitle = createAction(
  '[App] Set View Title',
  props<{ viewTitle: string }>()
);
