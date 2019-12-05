import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import {HomeService} from '../../share/home.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private homeService: HomeService,private router : Router) { }

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
