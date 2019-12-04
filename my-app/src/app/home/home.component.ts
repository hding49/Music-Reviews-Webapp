import { Component, OnInit } from '@angular/core';
import {HomeService} from '../share/home.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[HomeService]

})
export class HomeComponent implements OnInit {


  constructor(private homeService:HomeService) { }

  ngOnInit() {
  }
  
  onCreate() {
    alert("Create successfully!");
    this.homeService.postInfo();
  }
}
