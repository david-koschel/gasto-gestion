import { Routes } from '@angular/router';
import { CookiesPolicyComponent } from "./web-pages/cookies-policy/cookies-policy.component";
import { PrivacyPolicyComponent } from "./web-pages/privacy-policy/privacy-policy.component";
import { HomeComponent } from './components/home/home.component';
import { UserTypeComponent } from './components/user-type/user-type.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { CompanyRegisterComponent } from './components/company-register/company-register.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';

import { LoginComponent } from "./components/login/login.component";
import {UserHomeComponent} from "./components/user-home/user-home.component";
import {InvoiceFormComponent} from "./components/invoice-form/invoice-form.component";
import {StatsComponent} from "./components/stats/stats.component";
import {userIsLoggedInGuard, userIsNotLoggedInGuard} from "./shared/guards";


export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    canActivate: [userIsNotLoggedInGuard]
  },
  {
    path: "contact",
    component: ContactComponent
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
    path: "log-in",
    component: LoginComponent,
    canActivate: [userIsNotLoggedInGuard]
  },
  {
    path: "user-type",
    component: UserTypeComponent,
    canActivate: [userIsNotLoggedInGuard]
  },
  {
    path: "user-register",
    component: UserRegisterComponent,
    canActivate: [userIsNotLoggedInGuard]
  },
  {
    path: "company-register",
    component: CompanyRegisterComponent,
    canActivate: [userIsNotLoggedInGuard]
  },
  {
    path: "user-data",
    component: UserDataComponent,
    canActivate: [userIsLoggedInGuard]
  },
  {
    path: "invoice-list",
    component: InvoiceListComponent,
    canActivate: [userIsLoggedInGuard]
  },
  {
    path: "user-home",
    component: UserHomeComponent,
    canActivate: [userIsLoggedInGuard]
  },
  {
    path: "invoice-form/:id",
    component: InvoiceFormComponent,
    canActivate: [userIsLoggedInGuard]
  },
  {
    path: "stats",
    component: StatsComponent,
    canActivate: [userIsLoggedInGuard]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
