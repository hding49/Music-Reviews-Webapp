import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
//import { Home } from '../../../../models/product.model';
import { Song } from './song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  selectedSong: Song = {
    Title: '',
    Artist: '',
    Album: '',
    Year: '',
    Comments: '',
    Reserved: '',
    Track: '',
    Genre: ''
  };
 // noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  postSong(song: Song){
    return this.http.post(environment.apiBaseUrl+'/song/secure/songcreate',song);
  }

  TopTen(){
    return this.http.get(environment.apiBaseUrl+'/song/open/songsort');
        
  }

  AdminGetSongs(){
    return this.http.get(environment.apiBaseUrl+'/admin/secure/getsongs');
  }

  AdminSetSong(song: Song){
    return this.http.post(environment.apiBaseUrl+'/admin/secure/setsong',song);
  }

  showTop(obj1)
  {  
      var ele1 = document.createElement("p")
      var node1 =document.createTextNode("Title:" + obj1.Title);
      ele1.appendChild(node1);
      document.getElementById("topten").appendChild(ele1);

      var ele2 = document.createElement("p")
      var node2 =document.createTextNode("type:" + obj1.type);
      ele2.appendChild(node2);
      document.getElementById("topten").appendChild(ele2);
  
      var ele3 = document.createElement("p")
      var node3 =document.createTextNode("loan:" + obj1.loan);
      ele3.appendChild(node3);
      document.getElementById("topten").appendChild(ele3);
  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("quantity:" + obj1.quantity);
      ele4.appendChild(node4);
      document.getElementById("topten").appendChild(ele4);

      var ele5 = document.createElement("p")
      var node5 =document.createTextNode("name:" + obj1.name);
      ele5.appendChild(node5);
      document.getElementById("topten").appendChild(ele5);
  
      var ele2 = document.createElement("p")
      var node2 =document.createTextNode("type:" + obj1.type);
      ele2.appendChild(node2);
      document.getElementById("topten").appendChild(ele2);
  
      var ele3 = document.createElement("p")
      var node3 =document.createTextNode("loan:" + obj1.loan);
      ele3.appendChild(node3);
      document.getElementById("topten").appendChild(ele3);
  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("quantity:" + obj1.quantity);
      ele4.appendChild(node4);
      document.getElementById("topten").appendChild(ele4);

      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("***********");
      ele4.appendChild(node4);
      document.getElementById("topten").appendChild(ele4);
  
  
    }

  searchSong(word){
    //console.log(word);
    return this.http.get(environment.apiBaseUrl+'/song/open/songsearch/' +word);
    //console.log(word);
  }

  show(obj)
  {  
      var ele1 = document.createElement("p")
      var node1 =document.createTextNode("Title:" + obj.Title);
      ele1.appendChild(node1);
      document.getElementById("info").appendChild(ele1);

      var ele2 = document.createElement("p")
      var node2 =document.createTextNode("type:" + obj.type);
      ele2.appendChild(node2);
      document.getElementById("info").appendChild(ele2);
  
      var ele3 = document.createElement("p")
      var node3 =document.createTextNode("loan:" + obj.loan);
      ele3.appendChild(node3);
      document.getElementById("info").appendChild(ele3);
  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("quantity:" + obj.quantity);
      ele4.appendChild(node4);
      document.getElementById("info").appendChild(ele4);

      var ele5 = document.createElement("p")
      var node5 =document.createTextNode("name:" + obj.name);
      ele5.appendChild(node5);
      document.getElementById("info").appendChild(ele5);
  
      var ele2 = document.createElement("p")
      var node2 =document.createTextNode("type:" + obj.type);
      ele2.appendChild(node2);
      document.getElementById("info").appendChild(ele2);
  
      var ele3 = document.createElement("p")
      var node3 =document.createTextNode("loan:" + obj.loan);
      ele3.appendChild(node3);
      document.getElementById("info").appendChild(ele3);
  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("quantity:" + obj.quantity);
      ele4.appendChild(node4);
      document.getElementById("info").appendChild(ele4);
  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("***********");
      ele4.appendChild(node4);
      document.getElementById("info").appendChild(ele4);
  
  
    }

  //postGoogle(user: Home){
    //return this.http.post(environment.apiBaseUrl+'/googlelogin',user,this.noAuthHeader);
  //}



  //getUserProfile() {
  //  return this.http.get(environment.apiBaseUrl + '/userProfile');
 // }

}