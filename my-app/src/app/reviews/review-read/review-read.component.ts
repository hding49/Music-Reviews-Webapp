import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ReviewService} from '../../share/review.service'

@Component({
  selector: 'app-review-read',
  templateUrl: './review-read.component.html',
  styleUrls: ['./review-read.component.scss'],
  providers: [ReviewService]
})
export class ReviewReadComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
  }

  SearchReview() {
    
    var word = document.getElementById("reviewsearch")["value"];
    this.reviewService.searchReview(word);
    //alert(word);
  }

}
