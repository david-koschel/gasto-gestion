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
    path: "user-data",
    component: UserDataComponent
  },
  {
    path: "invoice-list",
    component: InvoiceListComponent
  },
  {
    path: "log-in",
    component: LoginComponent
  },
  {
    path: "user-home",
    component: UserHomeComponent
  },
  {
    path: "invoice-form/:id",
    component: InvoiceFormComponent
  },
  {
    path: "stats",
    component: StatsComponent
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
