import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SongService} from '../../../share/song.service' 
import { Router } from "@angular/router";
import { AppComponent } from '../../../app.component';
import { Song } from '../../../share/song.model';

@Component({
  selector: 'app-admin-song',
  templateUrl: './admin-song.component.html',
  styleUrls: ['./admin-song.component.scss']
})
export class AdminSongComponent implements OnInit {
  showSucessMessage: boolean;
  serverErrorMessages: string;
  public song : any;
  searchIF = true;
  detail = new Array;
  judge = this.appcomponent.logged;
  songObject = new Song;

  constructor(private songService: SongService, private router : Router, private appcomponent : AppComponent) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    
    this.songService.AdminGetSongs().subscribe(
      res => {
        
        this.song = res;
       
        
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

setSongsType(title, Songtype) {
  this.songObject.Title =title;

  if (Songtype == "active")
  {
    this.songObject.type ="inactive";
  }

  else
  {
    this.songObject.type ="active";
  }

  
  this.songService.AdminSetSong(this.songObject).subscribe(
    res => {
      
      this.router.navigateByUrl('/getsongs');
    },
    err => {
      this.serverErrorMessages = err.error.message;
    }
  );
  
  
}

}
