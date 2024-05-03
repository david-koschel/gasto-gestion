import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
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
    const usersRef = collection(this.firestore, 'User');
    return collectionData(usersRef, {idField: 'id'}) as Observable<User[]>;
  }
}
