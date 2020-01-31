import { createSelector } from '@ngrx/store';
import { selectAppState } from '../core.state';

const getViewTitle = createSelector(selectAppState, state => state.viewTitle);

export const appQuery = {
  getViewTitle,
};
