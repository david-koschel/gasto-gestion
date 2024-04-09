import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private router = inject(Router);

  private userIsLoggedInSubject = new BehaviorSubject<boolean>(this.userIsLoggedIn);
  readonly userIsLoggedIn$ = this.userIsLoggedInSubject.asObservable();

  get userIsLoggedIn(): boolean {
    return this.userIsLoggedInSubject?.value;
  }

  logInUser(username: string, password: string) {
    this.userIsLoggedInSubject.next(true);
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
