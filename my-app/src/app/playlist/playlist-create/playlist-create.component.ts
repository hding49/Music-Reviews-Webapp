import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import {PlaylistService} from '../../share/playlist.service'
import { Router } from "@angular/router";

import { Playlist } from '../../share/playlist.model';

@Component({
  selector: 'app-playlist-create',
  templateUrl: './playlist-create.component.html',
  styleUrls: ['./playlist-create.component.scss'],
  providers: [PlaylistService]
})
export class PlaylistCreateComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private router : Router) { }

  ngOnInit() {
  }
  
  serverErrorMessages: string;
  showSucessMessage: boolean;
  onSubmit(form : NgForm){
    this.playlistService.postPlaylist(form.value).subscribe(
      res => {
        //this.showSucessMessage = true;
        //this.songService.setToken(res['token']);
        this.router.navigateByUrl('/reviewcreate');
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
    
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
