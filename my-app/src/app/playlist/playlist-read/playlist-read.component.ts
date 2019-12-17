import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import {PlaylistService} from '../../share/playlist.service'
import { Router } from "@angular/router";

import { Playlist } from '../../share/playlist.model';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-playlist-read',
  templateUrl: './playlist-read.component.html',
  styleUrls: ['./playlist-read.component.scss'],
  providers: [PlaylistService]
})
export class PlaylistReadComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  public playlist : any;
  public playlist1 : any;
  SongPlaylist = new Array();
  SongPlaylist1 = new Array();
  playlistIF = true;
  detail = new Array;
  songs = new Array;
  songs1 = new Array;
  RemovePlaylistObject = new Playlist;
  playlistObject = new Playlist;
  constructor(private playlistService: PlaylistService, private router : Router, private appcomponent : AppComponent) { }

  ngOnInit() {
  }

 
  onSubmit(form: NgForm) {
    //var word = "number2";
    var word = this.appcomponent.ownerPlaylist;
    //console.log(word);
    this.playlistService.getPlaylist(word).subscribe(
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
  
  //console.log("1");
}

edit(object2) {
  this.appcomponent.SongEditedPlaylist = object2;
  console.log(object2);
  this.router.navigateByUrl('/editplaylist');
  
}



removeSong(object1, ge) {
  
    this.RemovePlaylistObject.songs = ge;
    this.RemovePlaylistObject.playlistN=object1.playlistN;
    this.RemovePlaylistObject.owner=object1.owner;
   // var remove ={
    // "playlist" : object1,
   //  "song" : ge
   // };
   console.log(this.RemovePlaylistObject);
    this.playlistService.updatePlaylist(this.RemovePlaylistObject).subscribe (
   
      res => {
        //var word = "number2";
    var word1 = this.appcomponent.ownerPlaylist;
    console.log(word1);
    this.playlistService.getPlaylist(word1).subscribe(
      res => {
        
        this.playlist1 = res;
        //console.log(this.playlist);
        for (var d = 0; d < this.playlist1.length; d++)
        {
          for (var e = 0; e < this.playlist1[d].songs.length; e++)
          {
            //this.SongPlaylist[m] = this.playlist[n].songs[m];
          this.SongPlaylist1.push(this.playlist1[d].songs[e]);

          }

          this.songs1.push(this.SongPlaylist1);
        }
        this.showSucessMessage = true;
        //console.log(this.SongPlaylist[1]);
        //this.SongPlaylist.push(this.playlist.songs);
        //console.log(this.SongPlaylist);
      },
      err => { 
        this.serverErrorMessages = "No Playlist Now";
        
      }
    );

   }
   
   )
    //console.log(this.RemovePlaylistObject);
  
}

setPlaylistType(address1, Playlisttype) {
  this.playlistObject.playlistN =address1;

  if (Playlisttype == "public")
  {
    this.playlistObject.type ="private";
  }

  else
  {
    this.playlistObject.type="public";
  }

  
  this.playlistService.PlaylistType(this.playlistObject).subscribe(
    res => {
      
      this.router.navigateByUrl('/playlistread');
    },
    err => {
      this.serverErrorMessages = err.error.message;
    }
  );
  
  
}

}
