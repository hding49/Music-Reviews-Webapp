import { Component, OnInit } from '@angular/core';
import { HomeService } from "../share/home.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  constructor(private homeService : HomeService,private router : Router) { }

  ngOnInit() {
    this.homeService.getUserProfile().subscribe(
      res => {
        this.userDetails = res['user'];
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
