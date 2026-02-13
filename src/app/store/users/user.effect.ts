import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, map, switchMap, catchError } from 'rxjs/operators';
import * as UserActions from './user.action';
import { User } from './user/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserEffects {
  loadUsers$;

  constructor(private actions$: Actions,private http: HttpClient) {
    this.loadUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UserActions.loadUsers),
        switchMap(() =>
        this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );
}
}