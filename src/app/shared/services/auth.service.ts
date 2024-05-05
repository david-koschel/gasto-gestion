import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, concatAll, filter, map, Observable} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "./user.service";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);
  private userService = inject(UserService);

  private userIsLoggedInSubject = new BehaviorSubject<boolean>(this.userIsLoggedIn);
  readonly userIsLoggedIn$ = this.userIsLoggedInSubject.asObservable();

  get userIsLoggedIn(): boolean {
    return this.userIsLoggedInSubject?.value || !!localStorage.getItem("user-id");
  }

  get userId(): string {
    return localStorage.getItem("user-id")!;
  }

  logInUser(email: string, password: string) {
    this.userIsLoggedInSubject.next(true);
    this.userService.getUsers().pipe(
      map(users => users.find((user: any) => user.email === email))
    ).subscribe(user => {
      if (user?.password === password) {
        this.userIsLoggedInSubject.next(true);
        localStorage.setItem("user-id", user.id?.toString()!);
        this.router.navigate(["user-home"]);
      }
    });
  }

  logOutUser() {
    localStorage.removeItem("user-id");
    this.userIsLoggedInSubject.next(false);
    this.router.navigate(["home"]);
  }

  getCurrentUser(): Observable<User> {
    return this.userService.getUsers().pipe(
      concatAll(),
      filter((user: any) => user.id === localStorage.getItem("user-id"))
    );
  }
}
