import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc} from "@angular/fire/firestore";
import {User} from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: Firestore){}

  addUser(user: User){
    const usersRef = collection(this.firestore, 'User');
    return addDoc(usersRef, user);
  }

  getUsers(): Observable<User[]> {
    const usersRef = collection(this.firestore, 'users');
    return collectionData(usersRef, {idField: 'id'}) as Observable<User[]>;
  }

  updateUser(user: User){
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return setDoc(userDocRef, user);
  }

  deleteUser(user: User){
    const userDocRef = doc(this.firestore, `users/${user.id}`);
    return deleteDoc(userDocRef);
  }
}
