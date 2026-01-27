import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Register } from './register/register';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {path: '', component: LandingPage},
    {path: 'register', component: Register},
    {path: 'invite', component: AdminDashboardComponent}
];
