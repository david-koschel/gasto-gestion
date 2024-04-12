import { Routes } from '@angular/router';
import { CookiesPolicyComponent } from "./web-pages/cookies-policy/cookies-policy.component";
import { PrivacyPolicyComponent } from "./web-pages/privacy-policy/privacy-policy.component";
import { HomeComponent } from './components/home/home.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { CompanyRegisterComponent } from './components/company-register/company-register.component';
import { ContactComponent } from './components/contact/contact.component';



export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "cookies",
    component: CookiesPolicyComponent
  },
  {
    path: "politica-privacidad",
    component: PrivacyPolicyComponent
  },
  {
    path: "user-type",
    component: UserTypeComponent
  },
  {
    path: "user-register",
    component: UserRegisterComponent
  },
  {
    path: "company-register",
    component: CompanyRegisterComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
