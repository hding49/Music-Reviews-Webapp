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

  constructor(private songService: SongService, private router : Router, private appcomponent : AppComponent) { }

  ngOnInit() {
  }

  TopTenSong() {
    
    
    this.songService.TopTen();
    //alert(word);
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

readreviews() {
  this.router.navigateByUrl('/reviewread');
  
  console.log("12");
}

addToPlayist(object) {
  
  this.appcomponent.SongAddedPlaylist = object;
  console.log(this.appcomponent.SongAddedPlaylist);
  this.router.navigateByUrl('/playlistcreate');
  
}

}
