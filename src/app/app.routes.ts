import { Routes } from '@angular/router';
import {CookiesPolicyComponent} from "./web-pages/cookies-policy/cookies-policy.component";
import {PrivacyPolicyComponent} from "./web-pages/privacy-policy/privacy-policy.component";

export const routes: Routes = [
  {
    path: "cookies",
    component: CookiesPolicyComponent
  },
  {
    path: "politica-privacidad",
    component: PrivacyPolicyComponent
  }
];
