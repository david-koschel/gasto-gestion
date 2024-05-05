import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const userIsLoggedInGuard: CanActivateFn = () => {
  return inject(AuthService).userIsLoggedIn || inject(Router).createUrlTree(["/home"]);
};

export const userIsNotLoggedInGuard: CanActivateFn = () => {
  return !inject(AuthService).userIsLoggedIn || inject(Router).createUrlTree(["/user-home"]);
};
