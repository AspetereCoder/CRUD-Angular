import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private databaseStore: AngularFirestore) {}

  getAllUsers() {
    return this.databaseStore
      .collection('users', (user) => user.orderBy('name'))
      .valueChanges({ idField: 'firebaseId' }) as Observable<any[]>;
  }

  addUser(user: any) {
    return this.databaseStore.collection("users").add(user);
  }

  updateUser(userId: string, data: any) {
    return this.databaseStore.collection("users").doc(userId).update(data);
  }

  deleteUser(userId: string) {
    return this.databaseStore.collection("users").doc(userId).delete();
  }
}
