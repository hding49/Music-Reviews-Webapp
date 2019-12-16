import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../../share/review.service'
import { NgForm } from "@angular/forms";
import { AppComponent } from '../../app.component';
import { Review } from './../../share/review.model';

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss'],
  providers: [ReviewService]
})
export class ReviewCreateComponent implements OnInit {
  
  reviewObject = new Review;

  constructor(private reviewService: ReviewService, private appcomponent : AppComponent) { }

  ngOnInit() {
    
  }

  serverErrorMessages: string;
  showSucessMessage: boolean;

  onSubmit(form : NgForm){
    //this.reviewService.selectedReview.songN = this.appcomponent.SongAdded;
        this.reviewObject.songN = this.appcomponent.SongAdded;
        this.reviewObject.comment=form.value.comment;
        this.reviewObject.rating=form.value.Rating;
        console.log(this.reviewObject);
        this.reviewObject.owner = this.appcomponent.ownerPlaylist;
    this.reviewService.postReview(this.reviewObject).subscribe(
      res => {
        
    //alert(this.reviewService.selectedReview.songN);
        this.showSucessMessage = true;
        //this.songService.setToken(res['token']);
        //this.router.navigateByUrl('/songcreate');
        this.resetForm(form);
      },
      err => {
        //this.showSucessMessage = false;
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: NgForm) {
    this.reviewService.selectedReview = {
 
    songN: '',
    comment: '',
    rating: '',
    owner: '',
  
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
