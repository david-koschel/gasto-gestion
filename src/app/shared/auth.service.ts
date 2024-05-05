import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {Router} from "@angular/router";
import {DataJsonService} from "./data-json.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);
  private dataService = inject(DataJsonService);

  private userIsLoggedInSubject = new BehaviorSubject<boolean>(this.userIsLoggedIn);
  readonly userIsLoggedIn$ = this.userIsLoggedInSubject.asObservable();

  get userIsLoggedIn(): boolean {
    console.log(this.userIsLoggedInSubject?.value);
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
    // if (!noNavigation) window.location.href = "/gasto-gestion/web-pages/home/home.html?log-out=true";
  }

  /*function navigateToUserHome() {
    window.location.href = "/gasto-gestion/web-pages/user-home/user-home.html";
  }

  function navigateToGeneralHome() {
    window.location.href = "/gasto-gestion/web-pages/home/home.html";
  }*/


  /*function getUsernamesData() {
    return fetch("/data.json")
      .then(result => result.json())
      .then(json => json.users);
  }

  async function getUserData(email) {
    const usernames = await getUsernamesData();
    return usernames.find(user => user.email === email);
  }

  async function getLoggedUserData() {
    const usernames = await getUsernamesData();
    const email = localStorage.getItem("user-email");
    return usernames.find(user => user.email === email);
  }*/
}
