import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  query1: String;
  query2: String;
  url:any;
  postData: any;

  constructor(private http: HttpClient)
  {
    this.query1 = '';
    this.query2 = '';
    this.url = "http://localhost:3000/searchQuery";
  }
    post(){
      // console.log('post',this.message); 
       this.http.post(this.url,{searchinput:this.query1,searchcity:this.query2}).toPromise().then(data =>{
        //  console.log(data);
       });
    }
}
