import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import {ReviewService} from '../share/review.service'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  
  providers: [ReviewService]
})
export class ReviewsComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
  }



}
