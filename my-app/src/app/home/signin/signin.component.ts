import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {HomeService} from '../../share/home.service'
import {AuthService, SocialUser, GoogleLoginProvider} from 'ng4-social-login';
import { Home } from '../../share/home.model'
//import {AuthService, SocialUser, GoogleLoginProvider} from 'angularx-social-login';
//import {AuthService, SocialUser, GoogleLoginProvider} from 'angular5-social-login';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  public user: any = SocialUser;
  googleuser = new Home;
  //public googleuser : any = Home;

  constructor(private homeService: HomeService, private router : Router, private socialAuthService : AuthService) { }

googlelogin(){

  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
    this.user = userData;
    this.googleuser.email = this.user.email;
    this.googleuser.password = "666666";
    //this.googleuser.active = true;

    //this.postGoogle(this.googleuser)

    this.homeService.postGoogle(this.googleuser).subscribe(
      res => {
        this.homeService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );

  });
}

  model ={
    email :'',
    password:''
  };

  

  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  ngOnInit() {
    if(this.homeService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  onSubmit(form : NgForm){
    this.homeService.login(form.value).subscribe(
      res => {
        this.homeService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}
