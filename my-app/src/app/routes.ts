import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './home/signup/signup.component';
import { SigninComponent } from './home/signin/signin.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { SongCreateComponent } from './song/song-create/song-create.component';
import { SongComponent } from './song/song.component';
import { SongSearchComponent } from './song/song-search/song-search.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongToprateComponent } from './song/song-toprate/song-toprate.component';
import { AdminComponent } from './home/admin/admin.component';
import { ReviewCreateComponent } from './reviews/review-create/review-create.component';
import { ReviewReadComponent } from './reviews/review-read/review-read.component';
import { PlaylistCreateComponent } from './playlist/playlist-create/playlist-create.component';

export const appRoutes: Routes = [
    {
        path: 'about-us', component: AboutComponent,
        //children: [{ path: '', component: SignupComponent }]
    },
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
    },
    {
        path: 'songcreate', component: SongComponent,
        children: [{ path: '', component: SongCreateComponent }]
    },
    {
        path: 'songsearch', component: SongComponent,
        children: [{ path: '', component: SongSearchComponent }]
    },
    {
        path: 'topten', component: SongComponent,
        children: [{ path: '', component: SongToprateComponent }]
    },
    {
        path: 'reviews', component: ReviewsComponent,
        
    },
    {
        path: 'playlistcreate', component: PlaylistComponent,
        children: [{ path: '', component: PlaylistCreateComponent }]
       
    },
    {
        path: 'admin', component: HomeComponent,
        children: [{ path: '', component: AdminComponent }]
       
    },
    {
        path: 'reviewcreate', component: ReviewsComponent,
        children: [{ path: '', component: ReviewCreateComponent }]
    },
    {
        path: 'reviewread', component: ReviewsComponent,
        children: [{ path: '', component: ReviewReadComponent }]
    }

];