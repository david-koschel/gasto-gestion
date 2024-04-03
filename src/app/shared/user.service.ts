import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userIsLoggedIn() {
    return !!localStorage.getItem("user-email");
  }

  logOutUser() {
    localStorage.removeItem("user-email");
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
