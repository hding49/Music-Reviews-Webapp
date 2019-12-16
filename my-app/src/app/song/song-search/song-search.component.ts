import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SongService} from '../../share/song.service';
import { Router } from "@angular/router";
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.scss'],
  providers: [SongService]
})
export class SongSearchComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  public song : any;
  searchIF = true;
  detail = new Array;
  judge = this.appcomponent.logged;
  //details = true;

  constructor(private songService: SongService,private router : Router, private appcomponent : AppComponent) { }

  ngOnInit() {
  }

 

  onSubmit(form: NgForm) {
    var word = document.getElementById("search")["value"];
    this.songService.searchSong(word).subscribe(
      res => {
        
        this.song = res;
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
  
  console.log("1");
}

readreviews() {
  this.router.navigateByUrl('/reviewread');
  
  console.log("12");
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
