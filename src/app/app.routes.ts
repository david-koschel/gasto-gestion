import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserTypeComponent } from './components/user-type/user-type.component';

export const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "user-type", component: UserTypeComponent}
];
