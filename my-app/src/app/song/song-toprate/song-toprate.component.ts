import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SongService} from '../../share/song.service' 
import { Router } from "@angular/router";
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-song-toprate',
  templateUrl: './song-toprate.component.html',
  styleUrls: ['./song-toprate.component.scss'],
  providers: [SongService]
})
export class SongToprateComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  public song : any;
  searchIF = true;
  detail = new Array;
  judge = this.appcomponent.logged;

  constructor(private songService: SongService, private router : Router, private appcomponent : AppComponent) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    
    this.songService.TopTen().subscribe(
      res => {
        
        this.song = res;
        console.log(this.song);
        
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
  
  console.log("1");
}

readreviews(object1) {
  this.router.navigateByUrl('/reviewread');
  this.appcomponent.SongAddedReview = object1;
  //console.log(this.appcomponent.SongAddedReview);
}

addreviews(name) {
  this.router.navigateByUrl('/reviewcreate');
  this.appcomponent.SongAdded = name;
}

addToPlayist(object) {
  
  this.appcomponent.SongAddedPlaylist = object;
  console.log(this.appcomponent.SongAddedPlaylist);
  this.router.navigateByUrl('/playlistcreate');
  
}

}
