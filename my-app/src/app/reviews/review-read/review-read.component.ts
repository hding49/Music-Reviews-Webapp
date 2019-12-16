import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ReviewService} from '../../share/review.service';
import { AppComponent } from '../../app.component';
import { Router } from "@angular/router";
import { Review } from '../../share/review.model';

@Component({
  selector: 'app-review-read',
  templateUrl: './review-read.component.html',
  styleUrls: ['./review-read.component.scss'],
  providers: [ReviewService]
})
export class ReviewReadComponent implements OnInit {

  showSucessMessage: boolean;
  serverErrorMessages: string;
  public review : any;

  SongReview = new Array();

  reviewIF = true;
  detail = new Array;
  reviews = new Array;
 
  ReviewObject = new Review;

  constructor(private reviewService: ReviewService, private router : Router, private appcomponent : AppComponent) { }
  ngOnInit() {}
  
  
  onSubmit() {
    //this.reviewService.sortReview(this.appcomponent.SongAddedReview);

    this.reviewService.sortReview(this.appcomponent.SongAddedReview).subscribe(
      res => {
        
        this.review = res;
        console.log(this.review);
        //console.log(this.playlist);
        // for (var n = 0; n < this.review.length; n++)
        // {
        //   for (var m = 0; m < this.review[n].songs.length; m++)
        //   {
        //     //this.SongPlaylist[m] = this.playlist[n].songs[m];
        //   this.SongReview.push(this.review[n].songs[m]);

        //   }

        //   this.reviews.push(this.SongReview);
        // }
        //console.log(this.SongPlaylist[1]);
        //this.SongPlaylist.push(this.playlist.songs);
        //console.log(this.SongPlaylist);
      },
      err => { 
        //console.log(err);
        
      }

  )
    };

}
