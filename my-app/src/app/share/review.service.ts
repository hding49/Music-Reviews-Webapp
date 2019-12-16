import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
//import { Home } from '../../../../models/product.model';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  selectedReview: Review = {
    comment: '',
    songN: '',
    rating: '',
    owner: '',
    
   
  };
 // noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  postReview(review: Review){
    return this.http.post(environment.apiBaseUrl+'/reviewcreate',review);
  }

  searchReview(id){
    return this.http.get(environment.apiBaseUrl+'/reviewsearch/' +id).subscribe(data => {
        
      console.log(data);

      var child = document.getElementById("review").children;

             for (var j=child.length-1; j>=0; j--) 
             {
                document.getElementById("review").removeChild(child[j]);
             }

             for (var i=0; i<data['length']; i++)
             {
                 this.show(data[i]);
             }
 
    });
  }

  show(obj)
  {  
      var ele1 = document.createElement("p")
      var node1 =document.createTextNode("song name:" + obj.songN);
      ele1.appendChild(node1);
      document.getElementById("review").appendChild(ele1);

      var ele2 = document.createElement("p")
      var node2 =document.createTextNode("comment:" + obj.comment);
      ele2.appendChild(node2);
      document.getElementById("review").appendChild(ele2);

      var ele3 = document.createElement("p")
      var node3 =document.createTextNode("rating:" + obj.rating);
      ele3.appendChild(node3);
      document.getElementById("review").appendChild(ele3);

      var ele5 = document.createElement("p")
      var node5 =document.createTextNode("reviewer:" + obj.owner);
      ele5.appendChild(node5);
      document.getElementById("review").appendChild(ele5);
  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("***********");
      ele4.appendChild(node4);
      document.getElementById("review").appendChild(ele4);
  
  
    }

  //postGoogle(user: Home){
    //return this.http.post(environment.apiBaseUrl+'/googlelogin',user,this.noAuthHeader);
  //}



  //getUserProfile() {
  //  return this.http.get(environment.apiBaseUrl + '/userProfile');
 // }

}