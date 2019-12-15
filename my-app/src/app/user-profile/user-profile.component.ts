import { Component, OnInit } from '@angular/core';
import { HomeService } from "../share/home.service";
import { Router } from "@angular/router";
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private homeService : HomeService,private router : Router, private appcomponent : AppComponent) { }

  ngOnInit() {
    this.homeService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
        console.log(this.userDetails.email);
        this.appcomponent.ownerPlaylist = this.userDetails.email;
        console.log(this.appcomponent.ownerPlaylist);
      },
      err => { 
        console.log(err);
        
      }
    );
  }

  onLogout(){
    this.homeService.deleteToken();
    this.router.navigate(['/login']);
  }

}
