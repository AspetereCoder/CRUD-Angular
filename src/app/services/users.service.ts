import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private databaseStore: AngularFirestore) {}

  getAllUsers() {
    return this.databaseStore
      .collection('users', (user) => user.orderBy('name'))
      .valueChanges({ idField: 'firebaseId' }) as Observable<User[]>;
  }

  addUser(user: User) {
    return this.databaseStore.collection('users').add(user);
  }

  updateUser(userId: string | undefined, data: User) {
    return this.databaseStore.collection('users').doc(userId).update(data);
  }

  deleteUser(userId: string) {
    return this.databaseStore.collection('users').doc(userId).delete();
  }
}
