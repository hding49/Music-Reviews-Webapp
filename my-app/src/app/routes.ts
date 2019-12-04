  
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/signup/signup.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: HomeComponent,
        children: [{ path: '', component: SignupComponent }]
    },
    {
        path: '', redirectTo: '/signup', pathMatch: 'full'
    }
]