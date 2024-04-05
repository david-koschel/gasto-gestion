import { Routes } from '@angular/router';
import {CookiesPolicyComponent} from "./web-pages/cookies-policy/cookies-policy.component";
import {PrivacyPolicyComponent} from "./web-pages/privacy-policy/privacy-policy.component";
import { HomeComponent } from './components/home/home.component';
import {LoginComponent} from "./components/login/login.component";

export const routes: Routes = [
  {
  	path: "home",
  	component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cookies",
    component: CookiesPolicyComponent
  },
  {
    path: "politica-privacidad",
    component: PrivacyPolicyComponent
  }
];
