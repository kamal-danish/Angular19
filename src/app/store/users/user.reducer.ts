import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.action';
import { User } from './user/user.model';

export interface UsersState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => ({ ...state, loading: true, error: null })),
  on(UserActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    loading: false,
    users,
    error: null,
  })),
  on(UserActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
