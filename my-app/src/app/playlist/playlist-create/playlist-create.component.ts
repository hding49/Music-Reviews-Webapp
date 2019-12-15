import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import {PlaylistService} from '../../share/playlist.service'
import { Router } from "@angular/router";
import { AppComponent } from '../../app.component';
import { Playlist } from '../../share/playlist.model';

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.scss'],
  providers: [PlaylistService]
})
export class PlaylistCreateComponent implements OnInit {
  playlistObject = new Playlist;

  constructor(private playlistService: PlaylistService, private router : Router, public appcomponent : AppComponent) { }

  ngOnInit() {
  }
  
  serverErrorMessages: string;
  showSucessMessage: boolean;
  onSubmit(form : NgForm){
    this.playlistObject.songs = this.appcomponent.SongAddedPlaylist;
    //console.log(this.appcomponent.SongAddedPlaylist);
    //console.log(this.playlistObject.songs);
    this.playlistObject.playlistN=form.value.playlistN;
    this.playlistObject.owner=this.appcomponent.ownerPlaylist;
    console.log(this.playlistObject.owner);
    console.log(this.appcomponent.ownerPlaylist);
    this.playlistService.postPlaylist(this.playlistObject).subscribe(
      res => {
        //this.showSucessMessage = true;
        //this.songService.setToken(res['token']);
        this.router.navigateByUrl('/playlistread');
        
        this.resetForm(form);
      },
      err => {
        //this.showSucessMessage = false;
        this.serverErrorMessages = err.error.message;
      }
    );
  }

  resetForm(form: NgForm) {
    this.playlistService.selectedPlaylist = {
      playlistN: '',
      owner: '',
    songs: '',
    
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
