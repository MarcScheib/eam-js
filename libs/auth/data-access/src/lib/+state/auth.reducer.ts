import { AuthToken } from '@eam-js/auth/api';
import { Action, createReducer, on } from '@ngrx/store';
import { signInFailureAction, signInSuccessAction } from './auth-api.actions';
import { signInAction } from './auth-page.actions';
import { signOutAction } from './auth.action';

export const AUTH_FEATURE_KEY = 'auth';

export interface State {
  token: AuthToken;
  loading: boolean;
  error: any;
}

export interface AuthPartialState {
  [AUTH_FEATURE_KEY]: State;
}

export const initialState: State = {
  token: null,
  loading: false,
  error: null,
};

const authReducer = createReducer<State>(
  initialState,
  on(signInAction, (state, _) => ({ ...state, loading: true })),
  on(signInSuccessAction, (_, action) => ({
    token: action.token,
    loading: false,
    error: null,
  })),
  on(signInFailureAction, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(signOutAction, (state, _) => ({
    ...state,
    token: null,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
