import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import {PlaylistService} from '../../share/playlist.service'
import { Router } from "@angular/router";

import { Playlist } from '../../share/playlist.model';

@Component({
  selector: 'app-playlist-read',
  templateUrl: './playlist-read.component.html',
  styleUrls: ['./playlist-read.component.scss'],
  providers: [PlaylistService]
})
export class PlaylistReadComponent implements OnInit {

  constructor(private playlistService: PlaylistService, private router : Router) { }

  ngOnInit() {
  }

  ReadPlaylist() {
    
    
    this.playlistService.getPlaylist();
    //alert(word);
  }

}
