import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
query1 = "hello";
query2 = "hello2";


messages = [];

  constructor(private http: HttpClient) {


  }

  ngOnInit() {




}

post() {

  this.http.post('http://localhost:3000/searchQuery', { searchinput : this.query1, searchcity: this.query2}).toPromise();

}


}
