import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {HomeService} from '../../share/home.service'
import {AuthService, SocialUser, GoogleLoginProvider} from 'ng4-social-login';
import { Home } from '../../share/home.model';
import { AppComponent } from '../../app.component';
//import {AuthService, SocialUser, GoogleLoginProvider} from 'angularx-social-login';
//import {AuthService, SocialUser, GoogleLoginProvider} from 'angular5-social-login';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userDetails;
  public user: any = SocialUser;
  googleuser = new Home;
  googleuser1 = new Home;
  admin = new Home;
  //public googleuser : any = Home;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(private homeService: HomeService, private router : Router, private socialAuthService : AuthService, private appcomponent : AppComponent) { }

googlelogin(){

  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
    this.user = userData;
    this.googleuser.email = this.user.email;
    this.googleuser.password = "666666";
    //this.googleuser.active = true;
    this.homeService.postGoogle(this.googleuser).subscribe(
      res => {
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
    //this.postGoogle(this.googleuser)
    this.googleuser1.email = this.user.email;
    this.googleuser1.password = "666666";
    this.homeService.login(this.googleuser1).subscribe(
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
  //serverErrorMessages: string;
  ngOnInit() {
    if(this.homeService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  onSubmit(form : NgForm){
    this.homeService.login(form.value).subscribe(
      res => {
        
        this.homeService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
        
        this.homeService.getUserProfile().subscribe(
          res => {
            this.userDetails = res['user'];
            if (this.userDetails.type == "admin")
            {
                 this.appcomponent.god = true;
            }
            else
            {
              this.appcomponent.god = false;
            }
          },
          err => { 
            console.log(err);
            
          }
        );


      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  resend(form: NgForm){
    console.log("111");
    this.homeService.resendEmail(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        console.log("222");
       
        console.log(form.value);
        this.resetForm(form);
        
      },
      err => {
        console.log("errr");
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.homeService.selectedUser = {
      email: '',
      password: '',
      type: '',
      status: '',
    };
    form.resetForm();
    //this.serverErrorMessages = 'Already sent email.';
  }

}

