import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SongService} from '../../share/song.service'

@Component({
  selector: 'app-song-search',
  templateUrl: './song-search.component.html',
  styleUrls: ['./song-search.component.scss'],
  providers: [SongService]
})
export class SongSearchComponent implements OnInit {

  constructor(private songService: SongService) { }

  ngOnInit() {
  }

  SearchSong() {
    
    var word = document.getElementById("search")["value"];
    this.songService.searchSong(word);
    //alert(word);
  }

}
