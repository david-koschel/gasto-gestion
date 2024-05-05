import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, concatAll, filter, map, Observable, tap} from "rxjs";
import {Router} from "@angular/router";
import {DataJsonService} from "./data-json.service";
import {User} from "./models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);
  private dataService = inject(DataJsonService);

  private userIsLoggedInSubject = new BehaviorSubject<boolean>(this.userIsLoggedIn);
  readonly userIsLoggedIn$ = this.userIsLoggedInSubject.asObservable();

  get userIsLoggedIn(): boolean {
    return this.userIsLoggedInSubject?.value || !!localStorage.getItem("user-email");
  }

  logInUser(email: string, password: string) {
    this.userIsLoggedInSubject.next(true);
    this.dataService.fetchDataFromJson("users").pipe(
      map(users => users.find((user: any) => user.email === email))
    ).subscribe(user => {
      if (user?.password === password) {
        this.userIsLoggedInSubject.next(true);
        localStorage.setItem("user-email", user.email);
        this.router.navigate(["user-home"]);
      }
    });
  }

  logOutUser() {
    localStorage.removeItem("user-email");
    this.userIsLoggedInSubject.next(false);
    this.router.navigate(["home"]);
  }

  getCurrentUser(): Observable<User> {
    return this.dataService.fetchDataFromJson("users").pipe(
      concatAll(),
      filter((user: any) => user.email === localStorage.getItem("user-email"))
    );
  }
}
