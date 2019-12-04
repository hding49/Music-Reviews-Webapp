import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Product } from '../../../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  selectedUser: Product = {
    email: '',
    password: ''
  };
  constructor(private http: HttpClient) { }

  postUser(user: Product){
    return this.http.post(environment.apiBaseUrl+'/register',user);
  }

  postInfo(){

    
    var addname = document.getElementById("nameadd")["value"];
    var addtype = document.getElementById("typeadd")["value"];
    var addloan = document.getElementById("loanadd")["value"];
    var addquantity = document.getElementById("quantityadd")["value"];

    this.http.post('http://localhost:8080/products/create', {name: addname,type:addtype, loan:addloan, quantity:addquantity}).subscribe(data => {
    console.log(data);

    

     });
  }

  getInfo(){
      
      this.http.get('http://localhost:8080/products/read').subscribe(data => {
        
      console.log(data);

      var child = document.getElementById("info").children;

             for (var j=child.length-1; j>=0; j--) 
             {
                document.getElementById("info").removeChild(child[j]);
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
    var node1 =document.createTextNode("name:" + obj.name);
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

    var ele4 = document.createElement("p")
    var node4 =document.createTextNode("***********");
    ele4.appendChild(node4);
    document.getElementById("info").appendChild(ele4);


  }

  updateInfo(){
    var addname = document.getElementById("nameadd")["value"];
    var addtype = document.getElementById("typeadd")["value"];
    var addloan = document.getElementById("loanadd")["value"];
    var addquantity = document.getElementById("quantityadd")["value"];
    
    var searchid = document.getElementById("idsearch")["value"];
    this.http.put("http://localhost:8080/products/" + searchid +"/update", {name: addname,type:addtype, loan:addloan, quantity:addquantity}).subscribe(data => {
    console.log(data);

    

     });
  }

  deleteInfo(){

    var deleteid = document.getElementById("idsearch")["value"];
    this.http.delete("http://localhost:8080/products/" + deleteid +"/delete").subscribe(data => {
    console.log(data);

    

     });
  }
}
