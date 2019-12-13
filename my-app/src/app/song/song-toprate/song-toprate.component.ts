import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SongService} from '../../share/song.service' 

@Component({
  selector: 'app-song-toprate',
  templateUrl: './song-toprate.component.html',
  styleUrls: ['./song-toprate.component.scss'],
  providers: [SongService]
})
export class SongToprateComponent implements OnInit {

  constructor(private songService: SongService) { }

  ngOnInit() {
  }

  TopTenSong() {
    
    
    this.songService.TopTen();
    //alert(word);
  }
}
