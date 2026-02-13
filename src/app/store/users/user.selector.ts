import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UsersState } from './user.reducer';

export const selectUserState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
  selectUserState,
  state => state?.users ?? []
);

export const selectLoading = createSelector(
  selectUserState,
  state => state?.loading ?? false
);

export const selectError = createSelector(
  selectUserState,
  state => state?.error
);
