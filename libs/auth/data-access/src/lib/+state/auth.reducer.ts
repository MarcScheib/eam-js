import { AuthToken } from '@eam-js/auth/api';
import { Action, createReducer, on } from '@ngrx/store';
import { signInSuccessAction } from './auth-api.actions';

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
  on(signInSuccessAction, (_, action) => ({
    token: action.token,
    loading: false,
    error: null,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
