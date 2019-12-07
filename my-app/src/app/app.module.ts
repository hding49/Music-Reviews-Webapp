import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {HomeService} from './share/home.service';
import { SignupComponent } from './home/signup/signup.component'
//routes
import { appRoutes } from './routes';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SigninComponent } from './home/signin/signin.component';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'ng4-social-login';
const config = new AuthServiceConfig([
{
  id:GoogleLoginProvider.PROVIDER_ID,
  provider:new GoogleLoginProvider('556539806978-iqe6veisiloppprsrjelboovkljvam2r.apps.googleusercontent.com')
}
],false);

export function provideConfig(){
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    UserProfileComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    SocialLoginModule

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,HomeService,
  
  {provide: AuthServiceConfig, useFactory: provideConfig}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
