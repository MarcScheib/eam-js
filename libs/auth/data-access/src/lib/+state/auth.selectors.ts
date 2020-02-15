import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthPartialState, AUTH_FEATURE_KEY, State } from './auth.reducer';

export const getAuthState = createFeatureSelector<AuthPartialState, State>(
  AUTH_FEATURE_KEY
);

export const getAuthToken = createSelector(
  getAuthState,
  (state: State) => state.token
);

export const getAuthLoading = createSelector(
  getAuthState,
  (state: State) => state.loading
);

export const getAuthError = createSelector(
  getAuthState,
  (state: State) => state.error
);
