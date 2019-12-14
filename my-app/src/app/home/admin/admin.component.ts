import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {HomeService} from '../../share/home.service'
import {AuthService, SocialUser, GoogleLoginProvider} from 'ng4-social-login';
import { Home } from '../../share/home.model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  admin = new Home;
  constructor(private homeService: HomeService, private router : Router, private socialAuthService : AuthService) { }
  serverErrorMessages: string;

  model ={
    email :'',
    password:''
  };

  ngOnInit() {
    if(this.homeService.isLoggedIn())
    this.router.navigateByUrl('/userprofile');
  }

  adminlogin(){

  
    
    this.admin.email = "site manager";
    this.admin.password = "western2019";
    
    this.homeService.postAdmin(this.admin).subscribe(  
      res => {
        this.homeService.setToken(res['token']);
        this.router.navigateByUrl('/userprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );

 
}

onSubmit(form : NgForm){
  //this.admin.email = "site manager";
  //this.admin.password = "western2019";
  this.homeService.postAdmin(form.value).subscribe(  
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
