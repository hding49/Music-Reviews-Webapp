  import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/signup/signup.component';
import { SigninComponent } from './home/signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
        path: 'signup', component: HomeComponent,
        children: [{ path: '', component: SignupComponent }]
    },
    {
        path: 'login', component: HomeComponent,
        children: [{ path: '', component: SigninComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];