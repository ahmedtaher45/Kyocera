import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Register } from './register/register';

export const routes: Routes = [
    {path: '', component: LandingPage},
    {path: 'register', component: Register}
];
