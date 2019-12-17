import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import {PlaylistService} from '../../share/playlist.service'
import { Router } from "@angular/router";

import { Playlist } from '../../share/playlist.model';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-all-playlist',
  templateUrl: './all-playlist.component.html',
  styleUrls: ['./all-playlist.component.scss']
})
export class AllPlaylistComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  public playlist : any;

  SongPlaylist = new Array();

  playlistIF = true;
  detail = new Array;
  songs = new Array;

  RemovePlaylistObject = new Playlist;

  constructor(private playlistService: PlaylistService, private router : Router, private appcomponent : AppComponent) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    //var word = "number2";
    var word = "public";
  
    this.playlistService.AllPlaylist(word).subscribe(
      res => {
        
        this.playlist = res;
        //console.log(this.playlist);
        for (var n = 0; n < this.playlist.length; n++)
        {
          for (var m = 0; m < this.playlist[n].songs.length; m++)
          {
            //this.SongPlaylist[m] = this.playlist[n].songs[m];
          this.SongPlaylist.push(this.playlist[n].songs[m]);

          }

          this.songs.push(this.SongPlaylist);
        }
        //console.log(this.SongPlaylist[1]);
        //this.SongPlaylist.push(this.playlist.songs);
        //console.log(this.SongPlaylist);
      },
      err => { 
        //console.log(err);
        
      }
    );

}



getdetails(i,j) {
  
  if (this.detail[i] == true)
  {
    this.detail[i] = false;
  }

  else
  {
    this.detail[i] = true;
  }
  

}

}
