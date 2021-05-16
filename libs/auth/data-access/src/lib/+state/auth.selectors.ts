import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthPartialState, AUTH_FEATURE_KEY, State } from './auth.reducer';

const getAuthState = createFeatureSelector<AuthPartialState, State>(
  AUTH_FEATURE_KEY
);
const isLoggedIn = createSelector(getAuthState, state => !!state.token);
const getToken = createSelector(getAuthState, state => state.token);
const isLoading = createSelector(getAuthState, state => state.loading);
const getError = createSelector(getAuthState, state => state.error);

export const authQuery = {
  isLoggedIn,
  isLoading,
  getToken,
  getError,
};
