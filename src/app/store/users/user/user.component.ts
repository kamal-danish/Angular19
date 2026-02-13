import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideStore, Store, StoreModule } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { Observable } from 'rxjs';
// import { userReducer } from './store/user.reducer';
// import { UserEffects } from './store/user.effect';
// import * as UserSelectors from './store/user.selector';
// import * as UserActions from './store/user.action';
// import { User } from './store/user.model';
import { UserEffects } from '../user.effect';
import { userReducer } from '../user.reducer';
import * as UserSelectors from '../user.selector';
import * as UserActions from '../user.action';
import { User } from '../user/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    
  ],
   
  template: `
    <h2>User List</h2>

    <div *ngIf="loading$ | async">Loading...</div>
    <div *ngIf="error$ | async as error" style="color:red">{{ error }}</div>

    <ul>
      <li *ngFor="let user of users$ | async">
        {{ user.name }} - {{ user.email }}
      </li>
    </ul>
  `
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store) {
    this.users$ = this.store.select(UserSelectors.selectUsers);
    this.loading$ = this.store.select(UserSelectors.selectLoading);
    this.error$ = this.store.select(UserSelectors.selectError);
  }

  ngOnInit() {
    this.store.dispatch(UserActions.loadUsers());
  }
}

