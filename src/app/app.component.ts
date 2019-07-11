import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: String;
  query1: String;
  query2: String;

  constructor(private http: HttpClient)
  {
    this.title = 'HospiCheck';
    this.query1 = '';
    this.query2 = '';
  }

 
    post(){
      // console.log('post',this.message); 
       this.http.post("http://localhost:3000/searchQuery",{searchinput:this.query1,city:this.query2}).toPromise();
    }
}
