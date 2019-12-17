import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
//import { Home } from '../../../../models/product.model';
import { Playlist } from './playlist.model';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  selectedPlaylist: Playlist = {
    playlistN: '',
    owner: '',
    songs: '',
    description: '',
    type: '',
   
    
  };
 // noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient) { }

  postPlaylist(playlist: Playlist){
    return this.http.post(environment.apiBaseUrl+'/playlist/secure/playlistcreate',playlist);
  }

  PlaylistType(playlist: Playlist){
    return this.http.post(environment.apiBaseUrl+'/playlist/secure/settype',playlist);
  }

  updatePlaylist(playlist: Playlist){
    return this.http.post(environment.apiBaseUrl+'/playlist/secure/playlistupdate',playlist);
  }

  editPlaylist(newName,oldName){
    return this.http.post(environment.apiBaseUrl+'/playlist/secure/playlistedit',{old: oldName, new:newName});
  }

  getPlaylist(word){
    return this.http.get(environment.apiBaseUrl+'/playlist/open/playlistread/' +word);
  }

  AllPlaylist(word){
    return this.http.get(environment.apiBaseUrl+'/playlist/open/allplaylist/' +word);
  }

  showPlaylist(obj1)
  {  
      var ele1 = document.createElement("p")
      var node1 =document.createTextNode("Playlist name:" + obj1.playlistN);
      ele1.appendChild(node1);
      document.getElementById("playlistRead").appendChild(ele1);

  
      var ele4 = document.createElement("p")
      var node4 =document.createTextNode("***********");
      ele4.appendChild(node4);
      document.getElementById("playlistRead").appendChild(ele4);
  
  
    }

  // searchSong(id){
  //   return this.http.get(environment.apiBaseUrl+'/songsearch/' +id).subscribe(data => {
        
  //     console.log(data);

  //     var child = document.getElementById("info").children;

  //            for (var j=child.length-1; j>=0; j--) 
  //            {
  //               document.getElementById("info").removeChild(child[j]);
  //            }

  //            for (var i=0; i<data['length']; i++)
  //            {
  //                this.show(data[i]);
  //            }
 
  //   });
  // }

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