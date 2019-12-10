import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../../share/review.service'
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-review-create',
  templateUrl: './review-create.component.html',
  styleUrls: ['./review-create.component.scss'],
  providers: [ReviewService]
})
export class ReviewCreateComponent implements OnInit {

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
  }

  serverErrorMessages: string;
  showSucessMessage: boolean;
  onSubmit(form : NgForm){
    this.reviewService.postReview(form.value).subscribe(
      res => {
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
  
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
