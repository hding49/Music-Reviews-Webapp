import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HomeService} from '../../../share/home.service' 
import { Router } from "@angular/router";
import { AppComponent } from '../../../app.component';
import { Home } from '../../../share/home.model';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  public user : any;
  searchIF = true;
  detail = new Array;
  judge = this.appcomponent.logged;
  userObject = new Home;

  constructor(private homeService: HomeService, private router : Router, private appcomponent : AppComponent) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    
    this.homeService.AdminGetUsers().subscribe(
      res => {
        
        this.user = res;
        //console.log(this.song);
        
      },
      err => { 
        console.log(err);
        
      }
    );

}

getdetails(i) {
  
  if (this.detail[i] == true)
  {
    this.detail[i] = false;
  }

  else
  {
    this.detail[i] = true;
  }
  
 
}

setUsersType(address, Usertype) {
  this.userObject.email =address;

  if (Usertype == "normal")
  {
    this.userObject.type ="admin";
  }

  else
  {
    this.userObject.type ="normal";
  }

  
  this.homeService.AdminSetUser(this.userObject).subscribe(
    res => {
      
      this.router.navigateByUrl('/getusers');
    },
    err => {
      this.serverErrorMessages = err.error.message;
    }
  );
  
  
}


setUsersStatus(address1, Userstatus) {
  this.userObject.email =address1;

  if (Userstatus == "activated")
  {
    this.userObject.status ="deactivated";
  }

  else
  {
    this.userObject.status="activated";
  }

  
  this.homeService.AdminSetUserStatus(this.userObject).subscribe(
    res => {
      
      this.router.navigateByUrl('/getusers');
    },
    err => {
      this.serverErrorMessages = err.error.message;
    }
  );
  
  
}

}
