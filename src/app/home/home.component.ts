import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  query1: String;
  query2: String;
  url:any;
  postData: any;
  hospNames: any;
  // myControl = new FormControl();
  // options: string[] = ['One', 'Two', 'Three'];

  constructor(private http: HttpClient)
  {

    this.query1 = '';
    this.query2 = '';
    this.url = "http://localhost:3000/searchQuery";
  }

    async ngOnInit(){
      this.hospNames = await this.http.get('http://localhost:3000/searchQuery').toPromise().then(data=>{
        console.log(data);
        
      });
    }

    post(){
      // console.log('post',this.message);
      if(this.query2=="" || this.query2=="null")
      {
        console.log("City is empty");
        return false;
      }
       this.http.post(this.url,{searchinput:this.query1,searchcity:this.query2}).toPromise().then(data =>{
        //  console.log(data);
       });
    }
}
