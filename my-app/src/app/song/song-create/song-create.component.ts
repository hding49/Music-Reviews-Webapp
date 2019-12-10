import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import {SongService} from '../../share/song.service'
import { Router } from "@angular/router";

import { Song } from '../../share/song.model';

@Component({
  selector: 'app-song-create',
  templateUrl: './song-create.component.html',
  styleUrls: ['./song-create.component.scss'],
  providers: [SongService]
})
export class SongCreateComponent implements OnInit {

  constructor(private songService: SongService, private router : Router) { }

  ngOnInit() {
  }
  serverErrorMessages: string;
  showSucessMessage: boolean;
  onSubmit(form : NgForm){
    this.songService.postSong(form.value).subscribe(
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
    this.songService.selectedSong = {
      Title: '',
    Artist: '',
    Album: '',
    Year: '',
    Comments: '',
    Reserved: '',
    Track: '',
    Genre: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
