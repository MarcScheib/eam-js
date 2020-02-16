import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthPartialState, AUTH_FEATURE_KEY, State } from './auth.reducer';

const getAuthState = createFeatureSelector<AuthPartialState, State>(
  AUTH_FEATURE_KEY
);

const getToken = createSelector(getAuthState, (state: State) => state.token);

const isLoading = createSelector(getAuthState, (state: State) => state.loading);

const getError = createSelector(getAuthState, (state: State) => state.error);

export const authQuery = {
  isLoading,
  getToken,
  getError,
};
